async function Log(stack, level, pkg, message) {
  const url = "http://20.244.56.144/evaluation-service/logs";

  // Validate constraints (all lowercase & valid entries)
  const validStacks = ["backend", "frontend"];
  const validLevels = ["debug", "info", "warn", "error", "fatal"];
  const validPackages = {
    backend: ["cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service"],
    frontend: ["api"]
  };

  if (
    !validStacks.includes(stack) ||
    !validLevels.includes(level) ||
    !validPackages[stack]?.includes(pkg)
  ) {
    console.error("Invalid log parameters provided.");
    return;
  }

  const payload = {
    stack,
    level,
    package: pkg,
    message
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add Authorization headers if required here
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(Logging failed with status ${response.status});
    }

    console.log("Log sent successfully.");
  } catch (error) {
    console.error("Logging error:", error.message);
  }
}