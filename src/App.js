import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./App.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  const [activePlatform, setActivePlatform] = useState("twitter");

  const analyticsData = {
    twitter: {
      overview: {
        totalReach: "10,000",
        impressions: "45,000",
        engagementRate: 4.9,
        followersGrowth: 5.5,
      },
      detailed: {
        tweets: 446,
        following: 209,
        favorites: 570,
        mentions: 268,
        followers: 570,
      },
      chartData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [100, 120, 150, 170, 180, 200],
      },
      engagementRateData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [3, 3.5, 4, 4.5, 5, 5.5],
      },
    },
    facebook: {
      overview: {
        totalReach: "20,000",
        impressions: "60,000",
        engagementRate: 3.5,
        followersGrowth: 4.2,
      },
      detailed: {
        reach: 3420,
        views: 135,
        engaged: 30,
        clicks: 15,
        likes: 3,
      },
      chartData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [80, 100, 130, 160, 170, 180],
      },
      engagementRateData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [2, 2.5, 3, 3.5, 4, 4.5],
      },
    },
    instagram: {
      overview: {
        totalReach: "5,000",
        impressions: "25,000",
        engagementRate: 4.2,
        followersGrowth: 6.1,
      },
      detailed: {
        followers: 127,
        following: 274,
        photos: 16,
        profileViews: 53,
      },
      chartData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [40, 60, 90, 120, 140, 160],
      },
      engagementRateData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [1, 1.5, 2, 2.5, 3, 3.5],
      },
    },
    linkedin: {
      overview: {
        totalReach: "12,000",
        impressions: "50,000",
        engagementRate: 5.2,
        followersGrowth: 3.2,
      },
      detailed: {
        interactions: 16,
        impressions: 1743,
        followers: 98,
        allPageViews: 1969,
      },
      chartData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [60, 80, 110, 130, 150, 170],
      },
      engagementRateData: {
        labels: ["Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29", "Feb 5"],
        data: [2.5, 3, 3.5, 4, 4.5, 5],
      },
    },
  };

  const renderAnalytics = (platform) => {
    const data = analyticsData[platform];
    const chartData = {
      labels: data.chartData.labels,
      datasets: [
        {
          label: "Followers Growth",
          data: data.chartData.data,
          borderColor: "#4bc0c0",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    };

    const engagementRateData = {
      labels: data.engagementRateData.labels,
      datasets: [
        {
          label: "Engagement Rate",
          data: data.engagementRateData.data,
          borderColor: "#ff9f40",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          fill: true,
        },
      ],
    };

    return (
      <div className="analytics-container">
        <div className="overview-and-charts">
          <div className="overview-stats">
            <h3>Overview</h3>
            <div className="overview-item">
              <h4>Total Reach</h4>
              <p>{data.overview.totalReach}</p>
            </div>
            <div className="overview-item">
              <h4>Impressions</h4>
              <p>{data.overview.impressions}</p>
            </div>
            <div className="overview-item">
              <h4>Engagement Rate</h4>
              <p>{data.overview.engagementRate}%</p>
            </div>
            <div className="overview-item">
              <h4>Followers Growth</h4>
              <p>{data.overview.followersGrowth}%</p>
            </div>
          </div>

          <div className="charts-container">
            <div className="chart-container">
              <h3>Followers Growth Over Time</h3>
              <Line data={chartData} />
            </div>

            <div className="chart-container">
              <h3>Engagement Rate Over Time</h3>
              <Line data={engagementRateData} />
            </div>
          </div>
        </div>

        <div className="detailed-stats">
          {Object.entries(data.detailed).map(([key, value]) => (
            <div key={key} className="analytics-item">
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>Social Media Dashboard</h1>
      </header>

      <nav className="navbar">
        <div
          className={`navbar-item ${activePlatform === "twitter" ? "active" : ""}`}
          onClick={() => setActivePlatform("twitter")}
        >
          <FaTwitter size={30} />
          <span>Twitter</span>
        </div>
        <div
          className={`navbar-item ${activePlatform === "facebook" ? "active" : ""}`}
          onClick={() => setActivePlatform("facebook")}
        >
          <FaFacebookF size={30} />
          <span>Facebook</span>
        </div>
        <div
          className={`navbar-item ${activePlatform === "instagram" ? "active" : ""}`}
          onClick={() => setActivePlatform("instagram")}
        >
          <FaInstagram size={30} />
          <span>Instagram</span>
        </div>
        <div
          className={`navbar-item ${activePlatform === "linkedin" ? "active" : ""}`}
          onClick={() => setActivePlatform("linkedin")}
        >
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </div>
      </nav>

      <div className="main-content">
        {renderAnalytics(activePlatform)}
      </div>
    </div>
  );
};

export default App;
