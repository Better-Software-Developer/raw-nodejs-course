export function getContactForm(contacts, id) {
  let contact = {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };

  if (id) {
    contact = contacts.find((contact) => contact.id === parseInt(id, 10));
  }

  const form = `<!DOCTYPE html>
  <html>
    <head>
        <title>Contacts App</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="w-full max-w-xs">
        <form action="/save" method="POST" enctype="multipart/form-data" class="bg-white px-8 pt-6">
            <input type="hidden" id="id" name="id" value="${contact.id}" />
            <div class="mb-4">
                <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" value="${contact.firstName}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" value="${contact.lastName}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input type="text" id="phone" name="phone" value="${contact.phone}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value="${contact.email}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-4">
              <label for="profilePic" class="mb-2 inline-block text-gray-700 font-bold text-sm">Profile Picture</label>
              <input type="file" id="profilePic" name="profilePic" class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" />
            </div>
            <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
            </div>
        </form>
    </body>
  </html>`;

  return form;
}
