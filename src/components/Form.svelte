<script lang="ts">
    import { writable } from 'svelte/store';
    import { ALERTS } from '../constants/alerts.ts';
    import { ENDPOINT } from '../constants/index.ts';
    let displayedAlert = -1;
    const message = writable({
        sender: {
            value: '',
            focus: false,
            error: false,
        },
        email: {
            value: '',
            focus: false,
            error: false,
        },
        subject: {
            value: '',
            focus: false,
            error: false,
        },
        body: {
            value: '',
            focus: false,
            error: false,
        },
    });
    async function handleSendMessage() {
        displayedAlert = -1;
        message.update((msg) => {
            Object.entries(msg).forEach(([key, field]) => {
                if (!field.value || (key === 'email' && !/^[^\s@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(field.value))) {
                    field.error = true;
                    key === 'email' && field.value !== '' ? (displayedAlert = 1) : (displayedAlert = 0);
                } else if (field.error) {
                    field.error = false;
                }
            });
            return msg;
        });
        if (displayedAlert === -1) {
            await fetch(ENDPOINT+'message', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    sender: $message.sender.value,
                    email: $message.email.value,
                    subject: $message.subject.value,
                    body: $message.body.value
                })})
                .then(async response => {
                    if (response.status === 201) {
                        displayedAlert = 3;
                        message.update((msg) => {
                            Object.entries(msg).forEach(([key, field]) => {
                                field.value = '';
                            });
                            return msg;
                        });
                    } else {
                        displayedAlert = 2;
                    }
                });
        }
    }
</script>

<div class="w-full lg:w-9/12 mx-auto flex flex-col justify-center items-center gap-2.5 pt-10 lg:pt-0">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-2.5 w-full">
        <input
            type="text"
            name="name"
            id="name"
            placeholder="Name Surname"
            class={`rounded-md p-2 focus:outline-none ${$message.sender.focus ? 'border-l-4' : 'border-l-2'} ${$message.sender.error ? 'border-red-500' : 'border-white'} transition-all duration-200`}
            bind:value={$message.sender.value}
            on:input={(e) => ($message.sender.value = (e.target as HTMLInputElement).value)}
            on:focus={() => ($message.sender.focus = true)}
            on:blur={() => ($message.sender.focus = false)}
        />
        <input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.cat"
            class={`rounded-md p-2 focus:outline-none ${$message.email.focus ? 'border-l-4' : 'border-l-2'} ${$message.email.error ? 'border-red-500' : 'border-white'} transition-all duration-200`}
            bind:value={$message.email.value}
            on:input={(e) => ($message.email.value = (e.target as HTMLInputElement).value)}
            on:focus={() => ($message.email.focus = true)}
            on:blur={() => ($message.email.focus = false)}
        />
    </div>
    <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        class={`w-full rounded-md p-2 focus:outline-none ${$message.subject.focus ? 'border-l-4' : 'border-l-2'} ${$message.subject.error ? 'border-red-500' : 'border-white'} transition-all duration-200`}
        bind:value={$message.subject.value}
        on:input={(e) => ($message.subject.value = (e.target as HTMLInputElement).value)}
        on:focus={() => ($message.subject.focus = true)}
        on:blur={() => ($message.subject.focus = false)}
    />
    <textarea
        name="message"
        id="message"
        cols="10"
        rows="7"
        placeholder="Your message here..."
        class={`w-full rounded-md resize-none p-2 focus:outline-none ${$message.body.focus ? 'border-l-4' : 'border-l-2'} ${$message.body.error ? 'border-red-500' : 'border-white'} transition-all duration-200`}
        bind:value={$message.body.value}
        on:input={(e) => ($message.body.value = (e.target as HTMLInputElement).value)}
        on:focus={() => ($message.body.focus = true)}
        on:blur={() => ($message.body.focus = false)}
    ></textarea>
    <div class="flex justify-between items-start w-full">
        <p
            class={`font-bold text-sm ${displayedAlert !== -1 ? ALERTS[displayedAlert].status === 'Error' ? 'highlight-offset' : 'bg-black rounded-full px-2.5 py-1 text-accent shadow-sm' : ''} transition-all duration-200`}
        >
            {#if displayedAlert !== -1}
                {ALERTS[displayedAlert].message}
            {:else}
                If you have any doubts or would like to connect, feel free to reach out.
            {/if}
        </p>
        <button on:click={handleSendMessage} class="relative">
            <slot name="sendButtonStyle" />
        </button>
    </div>
</div>
