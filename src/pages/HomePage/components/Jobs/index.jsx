import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, deleteJob, getJobs, getMostRecent, getSavedJob } from '@/redux/slices/job';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import JobCard from './components/JobCard';
import NoJob from './components/NoJob';

import { JobWrap } from './style';
import { colors } from '@/styles/colors';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { SavedJob } from '@/svg/HomeImges';
import Loading from '@/pages/loading';


export default function Jobs() {
    const [value, setValue] = useState('1');
    const [matchJob, setMatchJob] = useState([])
    const { jobs, isLoading, jobSaved } = useSelector((state) => state.jobs);
    const { object } = useSelector(state => state.profile)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const saveNum = jobSaved.length
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobs())
        dispatch(getSavedJob())
        jobs?.forEach((innerArray) => {
            innerArray?.skills?.forEach((valueToCompare) => {
                if (object.skills.includes(valueToCompare)) {
                    setMatchJob((prev) => [...prev, innerArray]);
                }
            });
        });
    }, [value]);
    const handleJobClick = (id) => {
        const adeddJob = jobs.find(item => item.id === id)
        if (jobSaved.find(item => item.id === adeddJob.id)) {
            dispatch(deleteJob(adeddJob.id))
        } else {
            dispatch(addJob(adeddJob))
        }
    };
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
                    {jobs ? jobs.map((job) => (
                        <JobCard handleClick={(event) => {
                            event.stopPropagation();
                            handleJobClick(job.id);
                        }}
                            key={job.id} data={job} btn={
                                jobSaved.find((item) => item.id === job.id) ?
                                    <FavoriteOutlinedIcon />
                                    : <FavoriteBorderOutlinedIcon />} />
                    )) : <Loading />}
                </TabPanel>
                <TabPanel
                    sx={{ "padding": "0" }}
                    value="2">
                    {matchJob.length !== 0 ?
                        matchJob.map((job) => (
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