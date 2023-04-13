import type { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Head from "next/head";

const Home: NextPage = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);

  useEffect(() => {
    const fetchIp = async () => {
      const response = await axios.get("/api/ip");
      setIpAddress(response.data.ip);
    };
    fetchIp();
  }, []);

  return (
    <>
      <Head>
        <title>What Is My IP Address?</title>
        <meta
          name="description"
          content="This is a simple web application that displays your IP address and other information about your connection."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex items-center justify-center min-h-screen">
        <div className="text-4xl font-bold">
          {ipAddress ? `Your IP address is: ${ipAddress}` : "Loading..."}
        </div>
      </div>
    </>
  );
};

export default Home;
