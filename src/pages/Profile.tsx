import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { BiSolidBookBookmark } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profilePng from "../assets/profile.png";

export const L = (props: object) => {
  return <FiExternalLink style={{ fontSize: props.s }} className="inline" />;
};

const baseUrl: string = "https://api.github.com/users/"
let token: string
if(import.meta.env.GITHUB_TOKEN) {
  token = import.meta.env.GITHUB_TOKEN
}

const Profile = (props: object) => {
  const [searchParams] = useSearchParams();

  interface IProfile {
    avatar_url: string;
    html_url: string;
    name: string;
    login: string;
    location?: string;
    bio?: string;
    blog?: string;
    followers: number;
    following: number;
    public_repos: number;
  }

  const usn: string = searchParams.get("user") || props.usn;

  const skeleton: IProfile[] = [
    {
      avatar_url: profilePng,
      html_url: "",
      name: "",
      login: "",
      location: "",
      bio: "",
      blog: "",
      followers: 0,
      following: 0,
      public_repos: 0,
    },
  ];

  const [profile, setProfile]: [IProfile[], (profile: IProfile[]) => void] =
    useState(skeleton);

  useEffect(() => {
    // fetch the api from github
    axios
      .get(`${baseUrl}${usn}`, {'Authorization': `Bearer ${token}`})
      .then<IProfile[]>((res) => setProfile(res.data))
  }, []);

  // I don't want to use location you can remove the following code if you want

  profile.location = undefined;

  if (profile.name && profile.login && profile.html_url) {
    return (
      <div className="flex flex-col justify-center items-center h-[90vh] box-border px-4 fade">
        <div className="flex flex-col">
          <div className="w-[128px] h-[128px] md:w-[156px] md:h-[156px] rounded-full border-2 overflow-hidden mb-2 md:mb-4">
            {profile.avatar_url ? (
              <LazyLoadImage
                src={profile.avatar_url}
                alt="My GitHub profile picture"
                className="object-cover"
              />
            ) : (
              <LazyLoadImage
                src={profilePng}
                alt="Profile picture"
                className="object-cover"
              />
            )}
          </div>
          <div className="flex flex-col">
            {profile.name && (
              <a
                href={profile.html_url}
                className="text-3xl md:text-5xl mb-[-4px] font-bold"
              >
                {profile.name} <L s="14" />
              </a>
            )}
            <span className="text-[15px] md:text-2xl text-gray-300">
              @{profile.login}
            </span>
          </div>
          {profile.location && (
            <span className="flex gap-1 items-center text-[15px].md:text-2xl">
              <FaLocationDot />
              {profile.location}
            </span>
          )}
          {profile.bio && <p className="text-[15px] md:text-xl block max-w-[300px]">{`${profile.bio}`}</p>}
          {profile.blog && (
            <a
              href={profile.blog}
              className="text-blue-300 mb-2 underline text-[15px] md:text-xl"
            >
              <L s="18" /> {profile.blog}
            </a>
          )}
          <div className="flex gap-[4px] text-[15px] md:text-xl">
            <span>
              <IoMdPeople className="inline" /> Followers : {profile.followers}
            </span>
            <span>•</span>
            <span>Following : {profile.following}</span>
          </div>
          <Link to="/repos" className="text-[15px] md:text-xl">
            <BiSolidBookBookmark className="inline" /> Repositories :{" "}
            {profile.public_repos} <L s="14" />
          </Link>
        </div>
      </div>
    );
  } if(!profile.name && !profile.login && !profile.html_url) {
    return (
      <div className="flex items-center justify-center h-[100vh] w-full invert">
        <img src="/Eclipse-1s-200px.svg" width="120" />
      </div>
    )
  }
};

export default Profile;
