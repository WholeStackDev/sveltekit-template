<div class="min-h-screen bg-sky-100 flex justify-center items-center">
  <div class="p-8 flex-1">
    <div class="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
      <div class="relative h-48 bg-sky-500 rounded-bl-4xl">
        <svg
          class="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,186.7C840,149,960,75,1080,58.7C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <div class="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
        <h1 class="text-2xl font-semibold text-gray-900">Welcome back!</h1>
        <form class="mt-12" action="" method="POST">
          <div class="relative">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="john@doe.com"
              class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
            />
            <label
              for="email"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >Email address</label
            >
          </div>
          <div class="mt-10 relative">
            <input
              id="password"
              type="password"
              name="password"
              class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
              placeholder="Password"
            />
            <label
              for="password"
              class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >Password</label
            >
          </div>

          <input
            type="sumbit"
            value="Sign in"
            class="mt-20 px-4 py-2 rounded bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-500 focus:ring-opacity-80 cursor-pointer"
          />
        </form>
        <a
          href="#"
          class="mt-4 block text-sm text-center font-medium text-sky-600 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  </div>
</div>
