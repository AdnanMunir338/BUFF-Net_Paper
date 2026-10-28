const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const citation = document.querySelector(".citation-section pre code")?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(citation);
      copyStatus.textContent = "BibTeX copied.";
    } catch {
      copyStatus.textContent = "Copy unavailable in this browser. Select the BibTeX text and copy it manually.";
    }
  });
}
