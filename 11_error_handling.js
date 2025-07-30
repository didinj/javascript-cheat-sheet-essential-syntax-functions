// Error Handling
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.error(e.message);
} finally {
  console.log("Done");
}
