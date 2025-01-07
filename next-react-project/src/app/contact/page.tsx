
export default function Page() {

    async function submitForm(formData: FormData) {
        "use server";

        const email = formData.get("email");
        const message = formData.get("message");

        console.log("Email:", email);
        console.log("Message:", message);
    }

    return (
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-black">Contact us for more information!</h1>
            <form className="space-y-4" action={submitForm}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" type="email" name="email" required className="border-2  border-black-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" required rows={4} className="border-2  border-black-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700" />
                </div>
                <button type="submit" className="text-white bg-blue-600 rounded-md py-2 px-4" >Send Message</button>
            </form>
        </main>
    );
}