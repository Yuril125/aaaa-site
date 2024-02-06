import './App.css';
import { Gallery } from './components/Gallery';
import { UpcomingEvent } from './components/UpcomingEvent';
import { h3, listStyle, pageWrapper } from './styles/styles';

import { Calendar } from './components/Calendar';
import { InteractiveMap } from './components/InteractiveMap';
import { Navbar } from './components/Navbar';
import { PageSection } from './components/PageSection';

function App() {
  return (
    <div style={pageWrapper}>
      <Navbar jumpButtons={[
          { displayName: "Stanford Furs", sectionName: "Homepage"},
          { displayName: "About Us", sectionName: "About Us"},
          { displayName: "Events and Activities", sectionName: "Events and Activities"},
          { displayName: "Gallery", sectionName: "Gallery"},
          { displayName: "Resources and Links", sectionName: "Resources and Links"},
        ]}
        linkButtons={[
          { link: "instagram.com", icon: "/assets/icons/instagram.webp"},
          { link: "t.me", icon: "/assets/icons/telegram.png"},
          { link: "", icon: "/assets/icons/mail.png"},
          { link: "", icon: "/assets/icons/discord.png"},
        ]}
      />
      
      <PageSection
        title={"Homepage"}
        subtitle={"TODO"}
        content={"Welcome to Stanford Furries!"}
      >
        <img src='https://cdn.britannica.com/25/121725-050-8BF363EC/Hoover-Tower-Stanford-University-California.jpg'></img>
      </PageSection>

      <PageSection
        title={"About Us"}
        subtitle={"Our Mission"}
        content={"TODO"}
      >
      </PageSection>

      <PageSection
        subtitle={"How We Started"}
        content={"TODO"}
      >
      </PageSection>

      <PageSection
        title={"Events and Activities"}
        content={"TODO"}
      >
          <UpcomingEvent
            eventName={"New Year's Meetup"}
            month={1} day={1} year={2024} beginHour={11} beginMinute={0} endHour={18} endMinute={0}
            description={"Lorem Ipsum"}
          />
          <UpcomingEvent
            eventName={"Big Game"}
            month={1} day={26} year={2024} beginHour={15} beginMinute={0} endHour={19} endMinute={30}
            description={"We won 73-71 go bears"}
          />
        <Calendar calendarName={"All Events"} url={"https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=am9leS5qLnpodUBnbWFpbC5jb20&src=Y2IxYjNhYTVmMjFkN2M3M2Y3OTRhZjU2ZDg0MDEwOGVhYzg1MTQyMTgxZDdmOTM5MDFkZmIwYmI4ODg5YjY4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%234285F4"}/>
      </PageSection>

      <PageSection
        title={"Gallery"}
        subtitle={"Bottom Text"}
        content={""}
      >
        <Gallery galleryName={"Group Photos"}
          imageUrls={[
            "/assets/sample.jpg",
            "/assets/sample.jpg",
            "/assets/sample.jpg",
          ]}
        />
        <Gallery galleryName={"Fursuiters"}
          imageUrls={[
            "/assets/sample.jpg",
            "/assets/sample.jpg",
            "/assets/sample.jpg",
          ]}
        />
        <Gallery galleryName={"Memes & Candids"}
          imageUrls={[
            "/assets/sample.jpg",
            "/assets/sample.jpg",
            "/assets/sample.jpg",
          ]}
        />
        <Gallery galleryName={"Exec Board"}
          imageUrls={[
            "/assets/sample.jpg",
            "/assets/sample.jpg",
            "/assets/sample.jpg",
          ]}
        />
      </PageSection>

      <PageSection
        title={"Resources and Links"}
        subtitle={"Bottom Text"}
        content={"Here you can find a list of all our university affiliates and contact information!"}
      >
        <Calendar calendarName={"Office Hours"} url={"https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=am9leS5qLnpodUBnbWFpbC5jb20&src=Y2IxYjNhYTVmMjFkN2M3M2Y3OTRhZjU2ZDg0MDEwOGVhYzg1MTQyMTgxZDdmOTM5MDFkZmIwYmI4ODg5YjY4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E67C73&color=%234285F4"}/>
        <InteractiveMap locations={[
          { name: "Berkeley Furs", siteLink: "https://furries.at/berkeley", address: "University Avenue and, Oxford St, Berkeley, CA 94720"},
          { name: "UCLA Furs", siteLink: "https://furries.at/ucla", address: "405 Hilgard Avenue Box 951405 Los Angeles, CA 90095-1405"},
          { name: "Irvine Furs", siteLink: "https://furries.at/", address: "Peltason Drive, Suite 3200, Irvine, CA 92617"},
          { name: "MIT Technicolor Furs", siteLink: "https://furries.at/", address: "77 Massachusetts Avenue Cambridge, MA 02139"},
          { name: "BrownURSA", siteLink: "https://furries.at/", address: "Providence, RI 02912"},
        ]}></InteractiveMap>
      </PageSection>
    </div>
  );
}

export default App;
