import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";

const App = (): React.ReactElement => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
export default App;
