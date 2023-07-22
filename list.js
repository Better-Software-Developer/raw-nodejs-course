export function getContacts(contacts) {
  return `<!DOCTYPE html>
  <html>
    <head>
        <title>Contacts App</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
        <h1 class="mb-2 mt-0 text-4xl font-medium leading-tight text-center text-primary">Contacts App</h1>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mx-4" href="/new">Create Contact</a>
                        <table class="min-w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">Image</th>
                                    <th scope="col" class="px-6 py-4">ID</th>
                                    <th scope="col" class="px-6 py-4">First Name</th>
                                    <th scope="col" class="px-6 py-4">Last Name</th>
                                    <th scope="col" class="px-6 py-4">Phone</th>
                                    <th scope="col" class="px-6 py-4">Email</th>
                                    <th scope="col" class="px-6 py-4">Delete</th>
                                    <th scope="col" class="px-6 py-4">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${contacts.map(createRow).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </body>
  </html>`;
}

function createRow(contact) {
  return `<tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
    <td class="whitespace-nowrap px-6 py-4">
        <img src="${contact.file}" class="w-8 rounded-full" alt="profile pic" />
    </td>
    <td class="whitespace-nowrap px-6 py-4 font-medium">${contact.id}</td>
    <td class="whitespace-nowrap px-6 py-4">${contact.firstName}</td>
    <td class="whitespace-nowrap px-6 py-4">${contact.lastName}</td>
    <td class="whitespace-nowrap px-6 py-4">${contact.phone}</td>
    <td class="whitespace-nowrap px-6 py-4">${contact.email}</td>
    <td class="whitespace-nowrap px-6 py-4">
        <a class="text-red-400 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700" href="/delete/${contact.id}">delete</a>
    </td>
    <td class="whitespace-nowrap px-6 py-4">
        <a class="text-green-400 transition duration-150 ease-in-out hover:text-green-600 focus:text-green-600 active:text-green-700" href="/edit/${contact.id}">edit</a>
    </td>
    </tr>`;
}
