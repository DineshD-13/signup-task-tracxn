import React from 'react';
import '../component/Css/JobListingPage.css'; // Import the CSS file for styling

const JobListingPage = () => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', package: '$120,000/year' },
    { id: 2, title: 'Product Manager', company: 'InnovateX', location: 'New York, NY', package: '$110,000/year' },
    { id: 3, title: 'UI/UX Designer', company: 'DesignPro', location: 'Los Angeles, CA', package: '$95,000/year' },
    { id: 4, title: 'Data Scientist', company: 'DataWorks', location: 'Austin, TX', package: '$130,000/year' },
    { id: 5, title: 'Frontend Developer', company: 'WebFlow', location: 'Remote', package: '$105,000/year' },
    { id: 6, title: 'Backend Developer', company: 'ServerBase', location: 'Chicago, IL', package: '$115,000/year' },
    { id: 7, title: 'DevOps Engineer', company: 'CloudSync', location: 'Seattle, WA', package: '$125,000/year' },
    { id: 8, title: 'Mobile Developer', company: 'AppVentures', location: 'Boston, MA', package: '$110,000/year' },
    { id: 9, title: 'Marketing Specialist', company: 'MarketNow', location: 'San Diego, CA', package: '$80,000/year' },
    { id: 10, title: 'Sales Manager', company: 'SellWell', location: 'Dallas, TX', package: '$95,000/year' },
    { id: 11, title: 'QA Engineer', company: 'QualityTech', location: 'Philadelphia, PA', package: '$90,000/year' },
    { id: 12, title: 'HR Manager', company: 'PeopleFirst', location: 'Atlanta, GA', package: '$85,000/year' },
    { id: 13, title: 'Business Analyst', company: 'BizInsight', location: 'Denver, CO', package: '$100,000/year' },
    { id: 14, title: 'Cybersecurity Specialist', company: 'SecureNet', location: 'San Jose, CA', package: '$135,000/year' },
    { id: 15, title: 'AI Engineer', company: 'AIMinds', location: 'Palo Alto, CA', package: '$140,000/year' },
    { id: 16, title: 'Content Writer', company: 'WriteNow', location: 'Portland, OR', package: '$70,000/year' },
    { id: 17, title: 'SEO Specialist', company: 'SearchBoost', location: 'Miami, FL', package: '$75,000/year' },
    { id: 18, title: 'Network Engineer', company: 'NetWorks', location: 'Phoenix, AZ', package: '$100,000/year' },
    { id: 19, title: 'IT Support', company: 'TechHelp', location: 'Salt Lake City, UT', package: '$65,000/year' },
    { id: 20, title: 'Graphic Designer', company: 'DesignWorks', location: 'Nashville, TN', package: '$70,000/year' }
  ];

  return (
    <div className="job-listing-container">
      <h2>Job Listings</h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
            </div>
            <div className="job-details">
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.package}</p>
            </div>
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingPage;
