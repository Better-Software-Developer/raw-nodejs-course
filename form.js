export function getContactForm(contacts, id) {
  let contact = {
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };

  if (id) {
    // TODO:
  }

  const form = `<!DOCTYPE html>
  <html>
    <head>
        <title>Contacts App</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="w-full max-w-xs">
        <form action="/save" method="POST" class="bg-white px-8 pt-6">
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
            <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
            </div>
        </form>
    </body>
  </html>`;

  return form;
}
