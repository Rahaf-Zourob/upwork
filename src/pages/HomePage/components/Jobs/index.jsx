import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, deleteJob, getJobs, getMostRecent, getSavedJob } from '@/redux/slices/job';
import Box from '@mui/material/Box';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Loading from '@/pages/loading'
import JobCard from './components/JobCard';
import NoJob from './components/NoJob';

import { SavedJob } from '@/svg/HomeImges';

import { JobWrap, LoadMoreBtn } from './style';
import { colors } from '@/styles/colors';

export default function Jobs() {
    const [value, setValue] = useState('1');
    const [recent, setRecentJobs] = useState([])
    const { jobs, isLoading, jobSaved, recentJobs } = useSelector((state) => state.jobs);
    const { object } = useSelector(state => state.profile)
    const [count, setCount] = useState(2)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobs())
        dispatch(getSavedJob())
        // if (jobs !== []) {
        //     console.log(55)
        //     jobs.map((job) => {
        //       job?.skills?.map((sameSkill) => {
        //         if (object?.skills.includes(sameSkill)) {
        //             setRecentJobs([job])
        //         }
        //       })
        //     })
        //   }
    }, [])
    // console.log(recentJobs)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // console.log(recent)
    ;
    const saveNum = jobSaved.length
    const handleJobClick = (id) => {
        const adeddJob = jobs.find(item => item.id === id)
        if (jobSaved.find(item => item.id === adeddJob.id)) {
            dispatch(deleteJob(adeddJob.id))
        } else {
            dispatch(addJob(adeddJob))
        }
    }
    return (
        <JobWrap>
            <TabContext value={value}>
                <Box sx={{ borderBottom: colors.border.card }}>
                    <TabList
                        TabIndicatorProps={{ sx: { background: colors.palette.black } }}
                        sx={{
                            marginLeft: '20px',
                            "& button": { fontWeight: 450, textTransform: 'none' },
                            "& button:hover": { color: colors.hover.gray1 },
                            "& button:focus": { color: colors.palette.black },
                            "& button:active": { color: colors.palette.gray2 },
                            "& button.Mui-selected": { color: colors.palette.black }
                        }}
                        onChange={handleChange}
                        aria-label="lab API tabs example">
                        <Tab label="My Feed" value="1" />
                        <Tab label="Most Recent" value="2" />
                        <Tab label={`Saved jobs(${saveNum})`} value="3" />
                    </TabList>
                </Box>
                <TabPanel
                    sx={{ "padding": "0" }}
                    value="1">
                    {jobs ? jobs.slice(0, count).map((job) => (
                        <JobCard handleClick={(event) => {
                            event.stopPropagation();
                            handleJobClick(job.id);
                        }}
                            key={job.id} data={job} btn={
                                jobSaved.find((item) => item.id === job.id) ?
                                    <FavoriteOutlinedIcon />
                                    : <FavoriteBorderOutlinedIcon />} />
                    )) : <Loading />}
                    {jobs.length !== count && <LoadMoreBtn onClick={() => {
                        setCount(count + 2)
                        dispatch(getJobs(count))
                    }}>Load more jobs</LoadMoreBtn>}
                </TabPanel>
                <TabPanel
                    sx={{ "padding": "0" }}
                    value="2"
                >
                    {isLoading ? <Loading /> :
                        recent.length !== 0 ?
                            recent.map((job) => (
                                <JobCard handleClick={(event) => {
                                    event.stopPropagation();
                                    handleJobClick(job.id);
                                }}
                                    key={job.id} data={job} btn={
                                        jobSaved.find((item) => item.id === job.id) ?
                                            <FavoriteOutlinedIcon />
                                            : <FavoriteBorderOutlinedIcon />} />))

                            : <NoJob match />
                    }
                </TabPanel>
                <TabPanel
                    sx={{ "padding": "0" }}
                    value="3">
                    {saveNum === 0 ? <NoJob />
                        : (jobSaved?.map((job) => (
                            <JobCard key={job.id}
                                handleClick={(event) => {
                                    event.stopPropagation();
                                    handleJobClick(job.id)
                                }}
                                data={job} btn={<FavoriteOutlinedIcon />} />
                        ))
                        )
                    }
                </TabPanel>
            </TabContext>
        </JobWrap>
    );
}