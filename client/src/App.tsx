import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Blog from "@/pages/Blog";
import Chatbot from "@/pages/Chatbot";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/scroll-to-top";
import SmoothScroll from "@/components/smooth-scroll";
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/chatbot" component={Chatbot} />
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/dashboard">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll />
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
