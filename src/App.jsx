import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
    <Navbar />
    <Hero title="JavaScript exercises" subtitle="for interview prep" />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}
export default App

// stopped at https://youtu.be/LDB4uaJ87e0?si=itvkSF-ItyUCdBNS&t=4687