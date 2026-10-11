export const securityScenarios = [
  {
    id: "access", label: "Account access", title: "One login. A lot at stake.",
    description: "A stolen password can give someone access to more than an inbox.",
    assets: ["Team accounts", "Customer records", "Business tools"],
    risks: ["A password is the only barrier", "Access reaches sensitive records", "Unusual sign-ins go unnoticed"],
    fixes: ["Add another layer of verification", "Limit access to what each person needs", "Make unusual activity easier to spot"],
    outcome: "Stronger access. Less exposure.", benefit: "Help protect customer information and keep your team in control.",
  },
  {
    id: "website", label: "Website & apps", title: "Your front door should feel safe.",
    description: "A small weakness in a business application can expose important information.",
    assets: ["Your website", "Customer portal", "Connected data"],
    risks: ["An overlooked application weakness", "Outdated components stay in use", "Sensitive information is exposed"],
    fixes: ["Test the application with permission", "Prioritize patches and safer settings", "Verify that the identified gaps are fixed"],
    outcome: "Fewer gaps. A stronger digital business.", benefit: "Reduce preventable exposure in the tools your customers depend on.",
  },
  {
    id: "continuity", label: "Business continuity", title: "Keep a bad day from stopping everything.",
    description: "An incident is harder to contain when systems and recovery plans are unprepared.",
    assets: ["Daily operations", "Critical files", "Recovery plan"],
    risks: ["An incident spreads between systems", "Critical files have limited safeguards", "Recovery steps have never been tested"],
    fixes: ["Separate and strengthen critical systems", "Review backups and data safeguards", "Test recovery and response readiness"],
    outcome: "Better prepared. More resilient.", benefit: "Help limit disruption and give your business a clearer path to recovery.",
  },
] as const;
