"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/atoms/Form";

import { PATH } from "@/router/path";
import { SearchIcon } from "@/svg/HomeImges";

import { RecentSearch, SearchButton, SearchInput, SearchWrap } from "./style";
import { StyledFlexPure } from "@/styles/commen";
import { LightBody1 } from "@/components/atoms/Typography/style";

export default function SearchJob() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`${PATH.FILTER}/${search}`);
    const updatedRecentSearches = [search, ...recentSearches.slice(0, 4)];
    localStorage.setItem("recentSearche", JSON.stringify(updatedRecentSearches));
  };

  const recentSearchValues = (typeof window !== 'undefined') ? localStorage.getItem("recentSearche"): ''
  useEffect(() => {
    if (recentSearchValues) {
      setRecentSearches(JSON.parse(recentSearchValues));
    }
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Form handleSubmitForm={handleSubmit}>
        <SearchWrap>
          <SearchInput
            type="text"
            placeholder="Search for job"
            name="search"
            id="search"
            value={search}
            onChange={handleChange}
          />
          <SearchButton>{SearchIcon}</SearchButton>
        </SearchWrap>
      </Form>
      {recentSearches.length > 0 && (
        <StyledFlexPure>
          <LightBody1>Recent Search: </LightBody1>
          <RecentSearch href='#'>{recentSearches.join(", ")}</RecentSearch>
        </StyledFlexPure>
      )}
    </>
  );
}
