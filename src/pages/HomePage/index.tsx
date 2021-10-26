import { useState } from "react";
import { ContactCreateCard } from "../../components/cards/ContactCreateCard";
import { AppOverlay } from "../../components/common/AppOverlay";
import { ContactsActions } from "../../components/managers/ContactsActions";
import { ContactsManager } from "../../components/managers/ContactsManager";
import "./HomePage.scss";

export const HomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [textSearch, setTextSearch] = useState<string>("");

  return (
    <main className="home-page">
      <ContactsActions
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        setShowOverlay={setShowOverlay}
      />
      <ContactsManager textSearch={textSearch} />
      {showOverlay ? (
        <AppOverlay showOverlay={showOverlay}>
          <ContactCreateCard setShowOverlay={setShowOverlay} />
        </AppOverlay>
      ) : null}
    </main>
  );
};
