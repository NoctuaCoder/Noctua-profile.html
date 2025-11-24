import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

describe("Portfolio Components", () => {
  describe("Header Component", () => {
    it("should render header with navigation items", () => {
      render(<Header />);
      expect(screen.getByText("Portfolio")).toBeInTheDocument();
      expect(screen.getByText("Sobre")).toBeInTheDocument();
      expect(screen.getByText("Projetos")).toBeInTheDocument();
    });

    it("should have sticky positioning", () => {
      const { container } = render(<Header />);
      const header = container.querySelector("header");
      expect(header).toHaveClass("sticky");
    });
  });

  describe("Hero Component", () => {
    it("should render hero section with main heading", () => {
      render(<Hero />);
      expect(screen.getByText(/Olá, eu sou um/i)).toBeInTheDocument();
      expect(screen.getByText(/Desenvolvedor/i)).toBeInTheDocument();
    });

    it("should render CTA buttons", () => {
      render(<Hero />);
      expect(screen.getByText("Ver Projetos")).toBeInTheDocument();
      expect(screen.getByText("Baixar CV")).toBeInTheDocument();
    });

    it("should render social media buttons", () => {
      render(<Hero />);
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe("About Component", () => {
    it("should render about section with heading", () => {
      render(<About />);
      expect(screen.getByText("Sobre Mim")).toBeInTheDocument();
    });

    it("should display statistics", () => {
      render(<About />);
      expect(screen.getByText("5+")).toBeInTheDocument();
      expect(screen.getByText("20+")).toBeInTheDocument();
      expect(screen.getByText("10+")).toBeInTheDocument();
    });

    it("should have about section id", () => {
      const { container } = render(<About />);
      const section = container.querySelector("#about");
      expect(section).toBeInTheDocument();
    });
  });

  describe("Projects Component", () => {
    it("should render projects section with heading", () => {
      render(<Projects />);
      expect(screen.getByText("Projetos")).toBeInTheDocument();
    });

    it("should render project cards", () => {
      render(<Projects />);
      expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
      expect(screen.getByText("Task Management App")).toBeInTheDocument();
      expect(screen.getByText("Analytics Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Social Media App")).toBeInTheDocument();
    });

    it("should have projects section id", () => {
      const { container } = render(<Projects />);
      const section = container.querySelector("#projects");
      expect(section).toBeInTheDocument();
    });

    it("should display project tags", () => {
      render(<Projects />);
      expect(screen.getAllByText("React")).toHaveLength(4);
      expect(screen.getAllByText("Node.js").length).toBeGreaterThan(0);
    });
  });

  describe("Skills Component", () => {
    it("should render skills section with heading", () => {
      render(<Skills />);
      expect(screen.getByText("Habilidades")).toBeInTheDocument();
    });

    it("should display skill categories", () => {
      render(<Skills />);
      expect(screen.getByText("Frontend")).toBeInTheDocument();
      expect(screen.getByText("Backend")).toBeInTheDocument();
      expect(screen.getByText("DevOps & Tools")).toBeInTheDocument();
    });

    it("should display proficiency levels", () => {
      render(<Skills />);
      expect(screen.getByText("Nível de Proficiência")).toBeInTheDocument();
      expect(screen.getByText("JavaScript/TypeScript")).toBeInTheDocument();
    });

    it("should have skills section id", () => {
      const { container } = render(<Skills />);
      const section = container.querySelector("#skills");
      expect(section).toBeInTheDocument();
    });
  });

  describe("Contact Component", () => {
    it("should render contact section with heading", () => {
      render(<Contact />);
      expect(screen.getByText("Contato")).toBeInTheDocument();
    });

    it("should render contact form", () => {
      render(<Contact />);
      expect(screen.getByLabelText("Nome")).toBeInTheDocument();
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
      expect(screen.getByLabelText("Mensagem")).toBeInTheDocument();
    });

    it("should render social links", () => {
      render(<Contact />);
      expect(screen.getByText("GitHub")).toBeInTheDocument();
      expect(screen.getByText("LinkedIn")).toBeInTheDocument();
      expect(screen.getByText("Twitter")).toBeInTheDocument();
    });

    it("should have contact section id", () => {
      const { container } = render(<Contact />);
      const section = container.querySelector("#contact");
      expect(section).toBeInTheDocument();
    });
  });

  describe("Footer Component", () => {
    it("should render footer with branding", () => {
      render(<Footer />);
      expect(screen.getByText("Portfolio")).toBeInTheDocument();
    });

    it("should display current year", () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });

    it("should render footer links", () => {
      render(<Footer />);
      expect(screen.getByText("Sobre")).toBeInTheDocument();
      expect(screen.getByText("Projetos")).toBeInTheDocument();
      expect(screen.getByText("Habilidades")).toBeInTheDocument();
    });
  });
});
