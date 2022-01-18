import { mdToPdf } from "md-to-pdf";

mdToPdf({ path: "./README.md" }, { dest: "README.pdf" }).then(() => {
  console.log("Create pdf done");
});
