import ora from "ora";

const spinner = ora("Loadingunicorns").start();

setTimeout(() => {
  spinner.color = "yellow";

  spinner.text = "Loadingrainbows";
}, 1000);
