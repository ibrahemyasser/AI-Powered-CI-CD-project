import Head from "next/head";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import PipelineDiagram from "@/components/PipelineDiagram";
import InsightsGrid from "@/components/InsightsGrid";
import { Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AI-Powered CI/CD Pipeline Optimization</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DevOps + AI graduation project showcase" />
      </Head>
      <NavBar />
      <main className="[&_section]:animate-fade-in space-y-6">
        <Hero />

        <Section id="overview" title="Project Overview" subtitle="DevOps automation meets AI-driven analytics to optimize CI/CD pipelines for speed, cost, and reliability.">
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl">
            This project integrates a robust DevOps toolchain with machine learning to analyze pipeline history and provide actionable insights. The goal is to proactively prevent failures, reduce build times, and continuously improve pipeline efficiency.
          </p>
        </Section>

        <Section id="objectives" title="Objectives">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6">
            <li>Build a fully automated CI/CD pipeline.</li>
            <li>Collect metrics from builds and tests.</li>
            <li>Train a machine learning model to predict failures and optimize the pipeline.</li>
            <li>Use AI recommendations to improve performance.</li>
          </ul>
        </Section>

        <Section id="devops" title="DevOps Implementation (Foundation)" subtitle="GitHub, Jenkins, Docker, Kubernetes, Prometheus, Grafana">
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl">
            Source control on GitHub triggers Jenkins for CI/CD. Containerized builds produce images with Docker; deployments target Kubernetes. Prometheus scrapes metrics, visualized in Grafana. A feedback loop informs ongoing improvements.
          </p>
          <div className="mt-8">
            <PipelineDiagram />
          </div>
        </Section>

        <Section id="ai" title="AI/ML Enhancement (Innovation)" subtitle="Learning from pipeline history to predict and optimize">
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl">
            The AI component analyzes build logs, test outcomes, and runtime metrics to predict failures, estimate durations, identify flaky tests, and recommend optimizations like skipping redundant steps or prioritizing high-risk areas.
          </p>
          <div className="mt-6">
            <InsightsGrid />
          </div>
        </Section>

        <Section id="deliverables" title="Deliverables">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6">
            <li>Fully functional CI/CD pipeline</li>
            <li>Trained ML model</li>
            <li>Grafana dashboard for insights</li>
            <li>Demo video showing AI improvements</li>
          </ul>
        </Section>

        <Section id="contact" title="Why It’s a Great Project" subtitle="A practical AIOps showcase: real-world automation + intelligent optimization.">
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl">
            This project demonstrates a modern DevOps foundation enhanced with AI. It highlights automation maturity, observability, and data-driven decision-making to improve delivery speed and reliability.
          </p>
          <footer className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t pt-6 border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-600 dark:text-gray-400">Developed by Ibrahim Yasser</div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/ibrahemyasser" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary-500 transition">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ibrahim-yasser0xff/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary-500 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </footer>
        </Section>
      </main>
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fade-in { animation: fade-in 0.6s ease-out both; }
      `}</style>
    </>
  );
}

