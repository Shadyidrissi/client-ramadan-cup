"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Page() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        // Fetch all matches data when the component mounts
        axios
            .get("https://api-ramadan-cup-ten.vercel.app/show_all_matches") // Replace with the correct API URL
            .then((response) => {
                // Sort matches by date (most recent first)
                const sortedMatches = response.data.sort((a, b) => new Date(b.time) - new Date(a.time));
                setMatches(sortedMatches);
            })
            .catch((error) => console.error("Error fetching match data:", error));
    }, []);

    return (
        <div id="matches" style={{ width: "100%" }}>
            <div id="matches-header" style={{ direction: "rtl", textAlign: "right" }}>
                <h1>قوانين المباريات</h1>
                <p>
                    في بطولة رمضان، يتم احتساب النقاط بناءً على نتائج المباريات، حيث يحصل كل فريق على نقاط وفقًا لأدائه في المباراة.
                    يُلعب كل أسبوع **3 مباريات لكل فريق**، مما يزيد من المنافسة بين الأندية.
                </p>

                <h2>نظام النقاط:</h2>
                <ul>
                    <li><span style={{ fontWeight: "bold", color: "red" }}>L</span> - خسارة: يحصل الفريق على <strong>0 نقاط</strong>.</li>
                    <li><span style={{ fontWeight: "bold", color: "gray" }}>D</span> - تعادل: يحصل الفريق على <strong>1 نقطة</strong>.</li>
                    <li><span style={{ fontWeight: "bold", color: "green" }}>W</span> - فوز: يحصل الفريق على <strong>3 نقاط</strong>.</li>
                </ul>

                <h2>نظام المباريات الأسبوعي:</h2>
                <p>
                    كل فريق يخوض **3 مباريات أسبوعيًا**، مما يعني أن لديه فرصة لجمع **9 نقاط كحد أقصى في الأسبوع الواحد**.
                    هذه القاعدة تضمن تنافسًا قويًا بين الفرق وتمنح الجميع فرصة لتحسين مركزهم في الترتيب العام للبطولة.
                </p>
            </div>


            <div id="matches-body">
                <h1>جميع المباريات</h1>
                <div>
                    {matches.length > 0 ? (
                        matches.map((match, index) => (
                            <div key={index} id="card-match" >
                                <div>
                                    <img src={match.logoA || "https://img.freepik.com/vecteurs-libre/design-logo-modele_1195-105.jpg"} />
                                    <p>{match.scoreA}</p>
                                    <p>VS</p>
                                    <p>{match.scoreB}</p>
                                    <img src={match.logoB || "https://img.freepik.com/vecteurs-libre/design-logo-modele_1195-105.jpg"} />
                                </div>
                                <div>
                                    <ul>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg> : {new Date(match.time).toLocaleString()}
                                    </ul>
                                    <ul>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg> : {match.stadium}
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div id='mm'>
                            <span class="loader-match"></span>
                            <p>No matches found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Page;
