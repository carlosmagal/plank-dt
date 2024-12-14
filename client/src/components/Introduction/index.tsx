const Introduction = () => {
  return (
    <div className="max-w-sm w-full rounded-lg message-bot">
      {/* <img
        src="https://media.licdn.com/dms/image/v2/C4D03AQEuzW6V1edSeQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1656682372273?e=1739404800&v=beta&t=Wvk_2mvwZi1v5eicDgVBUXMqw3cgNht67qH2hwb_AKY"
        alt=""
        className="w-full h-64 object-cover"
      /> */}
      <div className="p-4">
        <h2 className="text-xl font-bold .intro-text">
          Welcome to the Code Snippet Refactoring & Explanation Tool!
        </h2>
        <p className="mt-2 .intro-text">
          This web application was developed by{" "}
          <a
            href="https://www.linkedin.com/in/carlos-magalhaes-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 text-decoration-line: underline"
          >
            Carlos Magalhães
          </a>{" "}
          as part of the Plank AI Accelerator program test.
        </p>
        <br />
        <p className=".intro-text">
          The interface was built using <strong>React</strong> and the server is
          implemented in <strong>Node.js</strong>, consuming the OpenAI API to
          process and generate responses.
        </p>
        <br />
        <p className=".intro-text">
          Feel free to explore, and if you'd like to check out the code, visit
          the{" "}
          <a
            href="https://github.com/carlosmagal/plank-dt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 text-decoration-line: underline"
          >
            GitHub repository
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Introduction;
