import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout, AuthLayout } from "../layouts";
import { LogInPage, SignUpPage, FeedbackPage, HomePage } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="log-in" element={<LogInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Route>
    </Route>
  )
);

export default router;
