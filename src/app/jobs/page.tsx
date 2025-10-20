import Navbar from "@/components/navbar";
import JobsHero from "@/components/jobs/job-hero";
import JobListings from "@/components/jobs/job-listings";
import Footer from "@/components/home/footer";

export default function Jobs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <JobsHero />
        <JobListings />
      </div>
      <Footer />
    </div>
  );
}
