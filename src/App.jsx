import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
    <Navbar />
    <Hero title="Test Title" subtitle="This is the subtitle" />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}
export default App

// stopped at https://youtu.be/LDB4uaJ87e0?si=mcoJWyJKBuDsosgB&t=4080