"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [tableData, setTableData] = useState([]);
  const [nextMatch, setNextMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the table data
        const tableResponse = await axios.get("https://api-ramadan-cup-ten.vercel.app/clubs-ranking");
        setTableData(tableResponse.data);

        // Fetch match data
        const matchResponse = await axios.get("https://api-ramadan-cup-ten.vercel.app/show_all_matches");

        // Find the next match by filtering out past matches
        const upcomingMatches = matchResponse.data.filter(
          (match) => new Date(match.time) > new Date() && !match.completed
        );

        // Sort the upcoming matches by date to find the soonest one
        if (upcomingMatches.length > 0) {
          const sortedMatches = upcomingMatches.sort(
            (a, b) => new Date(a.time) - new Date(b.time)
          );
          setNextMatch(sortedMatches[0]); // Set the soonest match
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div id="loading-page">
          {/* <h1>/h1> */}
          <span class="loader"></span>
        </div>
      ) : (
        <>
          <div id="loading">
            <h1>مرحباً بكم في بطولة رمضان</h1>
            <p>اكتشف جدول الترتيب، مواعيد المباريات، وأحدث التحديثات عن البطولة.</p>          </div>
          <div id="info-cup">
            <div id="card-info">
              <img
                src="https://media.istockphoto.com/id/889731020/photo/fairplay-before-the-game.jpg?s=612x612&w=0&k=20&c=-PIRfoSF2i11TxP9097OrlsD3SBwJX7VIau0o_22-is="
                alt="Fair Play"
              />
              <ul>
                <h3>قواعد</h3>
                <a href="/players">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </ul>
            </div>

            <div id="card-info">
              <img
                src="https://caanberry.com/wp-content/uploads/2023/08/nil-nil-draw-football-how-many.png"
                alt="Nil-Nil Draw"
              />
              <ul>
                <h3>قواعد المباريات ومواعيدها</h3>
                <a href="/matches">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </ul>
            </div>
          </div>

          <hr />

          <div id="table">
            <h1>جدول الترتيب</h1>
            <div>
              <div id="tbody">
                <li id="logo">الشعار</li>
                <li id="name">اسم</li>
                <li id="point">P</li>
                <li id="l">L</li>
                <li id="d">D</li>
                <li id="w">W</li>
                <li id="matches">المباريات</li>
                <li id="goals">الأهداف</li>
                <li id="conceded">مُستقبل</li>
                <li id="total">Total</li>
              </div>
              {tableData.length > 0 ? (
                tableData.map((team, index) => (
                  <div key={index} id="bbody">
                    <img src={team.logo} id="logo" alt={team.name} />
                    <li id="name">{team.name}</li>
                    <li id="point">{team.points}</li>
                    <li id="l">{team.loss}</li>
                    <li id="d">{team.draw}</li>
                    <li id="w">{team.win}</li>
                    <li id="matches">{team.win + team.loss + team.draw}</li>
                    <li id="goal">{team.goal}</li>
                    <li id="conceded">{team.conceded}</li>
                    <li id="conceded">{team.goal - team.conceded}</li>
                  </div>
                ))
              ) : (
                <p id="table-loading">جاري تحميل بيانات الجدول...</p>
              )}
            </div>
          </div>

          <hr />

          <div id="next-match">
            <h1>المباراة القادمة</h1>
            {nextMatch ? (
              <div id="card-match">
                <div>
                  <img
                    src={nextMatch.logoA}
                    style={{ width: 50, height: 50 }}
                  />
                  <p>VS</p>
                  <img
                    src={nextMatch.logoB}
                    style={{ width: 50, height: 50 }}
                  />
                </div>
                <div>
                  <ul>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>{" "}
                    : {new Date(nextMatch.time).toLocaleString()}
                  </ul>
                  <ul>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>{" "}
                    : {nextMatch.stadium}
                  </ul>
                </div>
              </div>
            ) : (
              <p>لم يتم العثور على أي مباريات قادمة.</p>
            )}
          </div>
        </>
      )}
    </>
  );
}
