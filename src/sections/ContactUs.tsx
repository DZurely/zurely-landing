"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  TabletSmartphone,
} from "lucide-react";
import Button from "../components/Button";

export default function ContactUsSection() {
  const contacts = [
    {
      title: "Email",
      icon: <Mail className="w-6 h-6 text-primary" />,
      description: (
        <a href="mailto:hello@company.com" className="underline">
          hello@company.com
        </a>
      ),
      note: "We reply within 24 hours",
    },
    {
      title: "Live Chat",
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      description: "Message us on Slack, Discord, or our support chat",
      action: (
        <Button className="text-white" size="sm">
          Start Chat
        </Button>
      ),
    },
    {
      title: "Socials",
      icon: <TabletSmartphone className="w-6 h-6 text-primary" />,
      description: "Reach us via our social channels:",
      socials: [
        {
          name: "Twitter",
          href: "https://twitter.com",
          icon: <Twitter className="w-5 h-5" />,
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com",
          icon: <Linkedin className="w-5 h-5" />,
        },
        {
          name: "GitHub",
          href: "https://github.com",
          icon: <Github className="w-5 h-5" />,
        },
      ],
    },
  ];

  /* ⭐ animations */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="h-screen flex items-center bg-background snap-start"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-primary mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contacts.map((contact, i) => (
            <motion.div
              key={i}
              variants={card}
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <div className="mb-4">{contact.icon}</div>

              <h3 className="text-xl font-semibold text-primary mb-2">
                {contact.title}
              </h3>

              <p className="text-muted-foreground mb-3">
                {contact.description}
              </p>

              {contact.note && (
                <p className="text-sm text-muted-foreground">{contact.note}</p>
              )}

              {contact.action && <div className="mt-3">{contact.action}</div>}

              {contact.socials && (
                <div className="flex justify-center gap-4 mt-3">
                  {contact.socials.map((social, j) => (
                    <a
                      key={j}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 border p-4 rounded-full transition hover:-translate-y-1"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="mt-12 text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          We are a fully remote team. You can reach us via email, chat, or social
          media. No physical office, just great support online!
        </motion.p>
      </div>
    </section>
  );
}
