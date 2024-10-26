<div class="w-9/12 mx-auto flex flex-col justify-center items-center gap-2.5">
    <div class="grid grid-cols-2 gap-2.5 w-full">
        <label for="name" class="hidden">Name</label>
        <input type="text" name="name" id="name" placeholder="Name Surname" class="rounded-md p-2 focus:outline-none" />
        <label for="email" class="hidden">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.cat"
            class="rounded-md p-2 focus:outline-none"
        />
    </div>
    <label for="subject" class="hidden">Subject</label>
    <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        class="w-full rounded-md p-2 focus:outline-none"
    />
    <label for="message" class="hidden">Message</label>
    <textarea
        name="message"
        id="message"
        cols="10"
        rows="7"
        placeholder="Your message here..."
        autocomplete="off"
        class="w-full rounded-md resize-none p-2 focus:outline-none"
    ></textarea>
    <div class="flex justify-between items-start w-full">
        <p class="font-bold text-sm">If you have any doubts or would like to connect, feel free to reach out.</p>
        <button class="relative">
            <slot name="sendButtonStyle" />
        </button>
    </div>
</div>
