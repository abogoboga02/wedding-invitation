import { Navigate, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Event from './components/Event';
import Gallery from './components/Gallery';
import Closing from './components/Closing';
import { weddingData } from './data';

function InvitationPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f8f7f4] antialiased">
      <Hero
        groom={weddingData.groom}
        bride={weddingData.bride}
        guestName={weddingData.guestName}
        tagline={weddingData.tagline}
      />
      <Event event={weddingData.event} />
      <Gallery gallery={weddingData.gallery} />
      <Closing groom={weddingData.groom} bride={weddingData.bride} />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/richard-dan-william" element={<InvitationPage />} />
      <Route path="*" element={<Navigate to="/richard-dan-william" replace />} />
    </Routes>
  );
}

export default App;
