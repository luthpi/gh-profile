import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import profilePng from "../assets/profile.png";

const baseUrl: string = "https://api.github.com/users/"
let token: string
if(import.meta.env.GITHUB_TOKEN) {
  token = import.meta.env.GITHUB_TOKEN
}

const Repos = (props: object) => {
  const [searchParams] = useSearchParams();
  interface IRepos {
    id: number,
    name: string,
    owner: object,
    html_url: string,
    description: string | null,
    fork: boolean,
    pushed_at: string,
    homepage: string,
    stargazers_count: number,
    language: string | null,
    forks_count: number,
    open_issues_count: number,
    license: object,
    topics: [],
    visibility: string,
    forks: number,
  }
  
  const skeleton: IRepos[] = [{
    id: 0,
    name: "",
    owner: {login: "", html_url: ""},
    html_url: "",
    description: "",
    fork: false,
    pushed_at: "",
    homepage: "",
    stargazers_count: 0,
    language: "",
    forks_count: 0,
    open_issues_count: 0,
    license: {name: ""},
    topics: [],
    visibility: "public",
    forks: 0,
  }]
  
  const [repos, setRepos]: [IRepos[], (repos: IRepos) => void] = useState(skeleton)
  
  const usn: string = searchParams.get("user") || props.usn;
  
  useEffect(() => {
    // fetch the api from github
    axios
      .get(`${baseUrl}${usn}/repos`, {'Authorization': `Bearer ${token}`})
      .then<IRepos[]>((res) => setRepos(res.data));
      
    }, []);
  
  return (
    <div>
      <h1>{usn}'s Repositories</h1>
    </div>
  );
};

export default Repos;
