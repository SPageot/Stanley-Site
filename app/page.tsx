import Profile from "@/components/Profile/Profile";
import profilePhoto from "../assets/stanleyphoto.jpeg";
import Timeline from "@/components/Timeline/Timeline";
import Skills from "@/components/Skills/Skills";
import { profileDetails } from "@/constants/helpers";

export default function Home() {
  return (
    <main className="bg-black text-white container h-screen max-w-full snap-y lg:flex lg:items-end">
      <section className="w-full h-full flex justify-center items-center snap-start lg:pw-20">
        <Profile
          jobTitle={profileDetails.jobTitle}
          profileSummary={profileDetails.profileSummary}
          srcPhoto={profilePhoto}
          alt="Stanley's Profile Photo"
        />
      </section>
      <div className="flex flex-col snap-start lg:overflow-y-scroll lg:h-full lg:p-10 lg:py-40">
        <section className="bg-black">
          <h2 className="text-xl underline text-center font-extrabold sticky lg:static top-0">
            Skills
          </h2>
          <div className="h-35 p-10 flex w-full justify-center items-start md:items-center lg:items-start">
            <Skills />
          </div>
        </section>
        <section className="bg-black h-full md:overflow-y-scroll lg:overflow-y-visible">
          <h2 className="text-xl underline text-center font-extrabold sticky top-0 lg:static z-50">
            History
          </h2>
          <Timeline />
        </section>
      </div>
    </main>
  );
}
