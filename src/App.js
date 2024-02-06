import './App.css';
import { Gallery } from './components/Gallery';
import { UpcomingEvent } from './components/UpcomingEvent';
import { h3, listStyle, pageWrapper } from './styles/styles';

import { Calendar } from './components/Calendar';
import { InteractiveMap } from './components/InteractiveMap';
import { Navbar } from './components/Navbar';
import { PageSection } from './components/PageSection';

import sample from './assets/sample.jpg';

import iconDiscord from './assets/icons/discord.png';
import iconInstagram from './assets/icons/instagram.webp';
import iconMailingList from './assets/icons/mail.png';
import iconTelegram from './assets/icons/telegram.png';


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
          { link: "instagram.com", icon: iconInstagram},
          { link: "t.me", icon: iconTelegram},
          { link: "", icon: iconMailingList},
          { link: "", icon: iconDiscord},
        ]}
      />

      <div style={{minHeight: 200, minWidth: 200}}></div>
      
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
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=Y2IxYjNhYTVmMjFkN2M3M2Y3OTRhZjU2ZDg0MDEwOGVhYzg1MTQyMTgxZDdmOTM5MDFkZmIwYmI4ODg5YjY4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </PageSection>

      <PageSection
        title={"Gallery"}
        subtitle={"Bottom Text"}
        content={""}
      >
        <Gallery galleryName={"Group Photos"}
          imageUrls={[
            sample, sample, sample,
          ]}
        />
        <Gallery galleryName={"Fursuiters"}
          imageUrls={[
            sample, sample, sample,

          ]}
        />
        <Gallery galleryName={"Memes & Candids"}
          imageUrls={[
            sample, sample, sample,

          ]}
        />
        <Gallery galleryName={"Exec Board"}
          imageUrls={[
            sample, sample, sample,
          ]}
        />
      </PageSection>

      <PageSection
        title={"Resources and Links"}
        subtitle={"Bottom Text"}
        content={"Here you can find a list of all our university affiliates and contact information!"}
      >
<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=Y2IxYjNhYTVmMjFkN2M3M2Y3OTRhZjU2ZDg0MDEwOGVhYzg1MTQyMTgxZDdmOTM5MDFkZmIwYmI4ODg5YjY4NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4" width="800" height="600" frameborder="0" scrolling="no"></iframe>        <InteractiveMap locations={[
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
