<script>
    import { onMount, tick } from "svelte";
    import figlet from "figlet";
    import ansi_regular from "figlet/fonts/Slant";
    figlet.parseFont("ANSI Regular", ansi_regular);
    let timer = document.createElement("div");
    let sessionsList = [];
    let totalTime;
    let nil, hrs_per_day, elapsedTime;
    let closeBtn, editBtn, importBtn, exportBtn;
    let showModal = false;
    let timerTime = 600;
    let editTimer;
    let modalValue = timerTime;
    nil = true;

    function formatTimeString(timeInSeconds) {
        let seconds = Math.trunc(timeInSeconds % 60);
        let minutes = Math.trunc((timeInSeconds / 60) % 60);
        let hours = Math.trunc(timeInSeconds / 3600);
        let output = (seconds < 10 ? "0" : "") + seconds;
        output = (minutes < 10 ? "0" : "") + minutes + " : " + output;
        if (hours > 0)
            output = (hours < 10 ? "0" : "") + hours + " : " + output;
        return output;
    }

    function formatSessionTimeString(timeInSeconds) {
        let seconds = Math.trunc(timeInSeconds % 60);
        let minutes = Math.trunc((timeInSeconds / 60) % 60);
        let hours = Math.trunc(timeInSeconds / 3600);
        let output = (seconds < 10 ? "0" : "") + seconds + "s";
        output = (minutes < 10 ? "0" : "") + minutes + "m " + output;
        if (hours > 0) output = (hours < 10 ? "0" : "") + hours + "h " + output;
        return output;
    }

    function timerEnd(duration, elapsedTime) {
        let data = localStorage.getItem("data");
        let currentSession = {
            duration: duration,
            elapsedTime: elapsedTime,
            datetime: new Date(),
            type: "focus",
        };
        if (data == null) {
            data = JSON.stringify({
                sessions: [currentSession],
            });
        } else {
            let parsedData = JSON.parse(data);
            parsedData.sessions = parsedData.sessions.concat(currentSession);
            parsedData.sessions.sort((a, b) => {
                return new Date(b.datetime) - new Date(a.datetime);
            });
            data = JSON.stringify(parsedData);
        }

        localStorage.setItem("data", data);
    }

    function manageTimer(duration, timerEl) {
        let startTime = 0;
        let targetDuration = 0;
        let paused = true;
        let elapsedMs = 0;
        targetDuration = duration;
        startTime = performance.now();
        let storedElapsedMs = 0;
        let currentElapsedMs = 0;
        let animationFrameId = null;

        function handleKeydown(ev) {
            if (ev.key == " ") {
                if (paused == false) {
                    storedElapsedMs += currentElapsedMs;
                    currentElapsedMs = 0;
                    paused = true;
                } else {
                    startTime = performance.now();
                    paused = false;
                }
            }
        }

        document.addEventListener("keydown", handleKeydown);
        timerEl.innerText = figlet.textSync(
            formatTimeString(Math.ceil(targetDuration)),
            "ANSI Regular",
        );

        function timerTick() {
            if (!paused) {
                currentElapsedMs = performance.now() - startTime;
            }
            elapsedMs = storedElapsedMs + currentElapsedMs;
            let remainingTime = Math.max(0, targetDuration * 1000 - elapsedMs);

            let timeString = formatTimeString(Math.ceil(remainingTime / 1000));
            if (!paused)
                timerEl.innerText = figlet.textSync(timeString, "ANSI Regular");
            if (remainingTime > 0) requestAnimationFrame(timerTick);
            else {
                timerEnd(
                    targetDuration,
                    Math.min(targetDuration * 1000, elapsedMs) / 1000,
                );
                destroy(false);
            }
        }
        animationFrameId = requestAnimationFrame(timerTick);
        function destroy(save) {
            if (save && elapsedMs != 0)
                timerEnd(
                    targetDuration,
                    Math.min(targetDuration, elapsedMs / 1000),
                );
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }

            document.removeEventListener("keydown", handleKeydown);
        }
        return destroy;
    }

    function isToday(givenDate) {
        const today = new Date();

        return (
            givenDate.getDate() === today.getDate() &&
            givenDate.getMonth() === today.getMonth() &&
            givenDate.getFullYear() === today.getFullYear()
        );
    }

    function displaySessions() {
        sessionsList.innerHTML = "";
        let data = localStorage.getItem("data");
        let sessions = [];
        if (data == null) {
            localStorage.setItem("data", JSON.stringify({ sessions: [] }));
        } else sessions = JSON.parse(data).sessions;
        sessions.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        sessionsList = [];
        for (let session of sessions) {
            let sessionDate = new Date(session.datetime);
            if (!isToday(sessionDate)) continue;
            sessionsList = sessionsList.concat({
                duration: formatSessionTimeString(session.elapsedTime),
                time:
                    sessionDate.getHours() +
                    ":" +
                    (sessionDate.getMinutes() < 10 ? "0" : "") +
                    sessionDate.getMinutes(),
            });
        }
    }
    function accumulateDates() {
        let data = localStorage.getItem("data");
        if (data == null) return { nil: true };
        let sessions = JSON.parse(data).sessions;
        let today = new Date();
        let hrs_per_day = {};
        for (let i = 0; i < 30; i++) {
            let cur = new Date(today);
            cur.setDate(today.getDate() - i);
            let formattedDate =
                cur.getFullYear() +
                "-" +
                String(cur.getMonth() + 1).padStart(2, "0") +
                "-" +
                String(cur.getDate()).padStart(2, "0");
            hrs_per_day[formattedDate] = 0;
        }
        let totalTime = 0;
        for (let session of sessions) {
            let cur = new Date(session.datetime);
            let formattedDate =
                cur.getFullYear() +
                "-" +
                String(cur.getMonth() + 1).padStart(2, "0") +
                "-" +
                String(cur.getDate()).padStart(2, "0");
            if (Object.hasOwn(hrs_per_day, formattedDate)) {
                hrs_per_day[formattedDate] += session.elapsedTime;
                totalTime += session.elapsedTime;
            }
        }
        let nil = false;
        return { nil, hrs_per_day, totalTime };
    }

    onMount(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key == "Escape") {
                showModal = false;
            }
        });
        function resetTimer() {
            displaySessions();
            let destroyTimer = manageTimer(timerTime, timer);
            ({ nil, hrs_per_day, totalTime } = accumulateDates());
        }

        resetTimer();

        closeBtn.addEventListener("click", (e) => {
            destroyTimer(true);
            resetTimer();
        });

        editBtn.addEventListener("click", (e) => {
            showModal = true;
        });
        editTimer = () => {
            console.log("hi");
            showModal;
            modalValue = Math.max(Math.min(modalValue, 999), 1);
            timerTime = 60 * modalValue;
            resetTimer();
            showModal = false;
        };
    });
</script>

<div class="body">
    {#if showModal}
        <div class="modal">
            <div class="editBox">
                <div class="hd3">Edit Duration</div>
                <div style="display:flex;" class="editRow">
                    <input
                        type="number"
                        name="minutes"
                        id="minutes"
                        min="0"
                        max="999"
                        bind:value={modalValue}
                    />
                    <div class="hd5">minutes</div>
                    <button aria-label="save" class="btn" onclick={editTimer}>
                        <i class="nf nf-md-check"></i>
                    </button>
                </div>
            </div>
        </div>
    {/if}
    <div class="area">
        <div class="sidebar">
            <div class="sessions">
                <div class="hd3">Sessions</div>
                <div class="sessionList">
                    {#each sessionsList as session}
                        <div class="sessionItem">
                            <div class="sessionDur">{session["duration"]}</div>
                            <div class="sessionTime">{session["time"]}</div>
                        </div>
                    {:else}
                        <div class="sessionErr">No Sessions :)</div>
                    {/each}
                </div>
            </div>
            <div class="tracker">
                <div class="hd3">Tracker</div>
                {#if !nil}
                    <div class="trackerGrid">
                        {#each Object.entries(hrs_per_day) as [date, seconds]}
                            <div
                                class="trackerUnit"
                                class:level1={seconds > 0}
                                class:level2={seconds > totalTime * 0.05}
                                class:level3={seconds > totalTime * 0.15}
                                class:level4={seconds > totalTime * 0.3}
                                class:level5={seconds > totalTime * 0.5}
                                title={`${date} · ${(seconds / 3600).toFixed(2)} hrs`}
                            ></div>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
        <div class="timer" bind:this={timer}></div>
        <div class="panel">
            <div class="close" bind:this={closeBtn}>
                <i class="nf nf-md-close"></i>
            </div>
            <div class="edit" bind:this={editBtn}>
                <i class="nf nf-md-pencil"></i>
            </div>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");
    @import "https://www.nerdfonts.com/assets/css/webfont.css";
    .modal {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .editBox {
        background-color: var(--bg);
        width: max-content;
        height: max-content;
        border: 3px solid var(--border);
    }

    .editRow {
        align-items: center;
        justify-content: space-between;
        margin: 1rem;
        width: 15vw;
    }

    .btn {
        background-color: var(--accent);
        color: var(--text);
        padding: 0.7rem 1rem;

        font-family: "Roboto Mono";
        font-size: 1.2rem;
        border: 3px solid var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .editRow > input {
        background-color: var(--bg);
        padding: 0.5rem 1rem;
        color: var(--text);
        font-family: "Roboto Mono";
        font-size: 1.2rem;
        font-weight: bold;
        outline: none;
        border: 3px solid var(--border);
    }

    .body {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bg);
    }
    .area {
        width: 80%;
        height: 80%;
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .sidebar {
        grid-column: span 1;
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 1em;
    }
    .timer {
        grid-column: span 3;
        border: 3px solid var(--border);
        transition: ease all 300ms;
        color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: monospace;
        white-space: pre;
        font-size: 1.5rem;
        position: relative;
    }

    .panel {
        position: absolute;

        top: calc(10% + 1rem);
        right: calc(10% + 1rem);
        display: flex;
        gap: 10px;
        flex-direction: row-reverse;
    }
    .panel > div {
        width: 2rem;
        height: 2rem;
        border: 3px solid var(--text-muted);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-muted);
    }

    .sidebar > div {
        border: 3px solid var(--border);
        transition: ease all 300ms;
    }

    .timer:hover,
    .sidebar > div:hover {
        border-color: var(--accent);
    }
    .hd3 {
        font-size: 1.2rem;
        margin: 0.8rem;
        color: var(--text);
        font-family: "Roboto Mono";
    }
    .hd5 {
        font-size: 0.8rem;
        color: var(--text);
        font-family: "Roboto Mono";
    }
    .sessionList {
        display: flex;
        flex-direction: column;
        font-family: "Roboto Mono";
        align-items: center;
    }
    .sessionItem {
        width: 80%;
        display: flex;
        flex-direction: row;
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--text);
        justify-content: space-between;
        padding: 0.4rem;
        margin-bottom: 0.4rem;
    }
    .sessionItem:hover {
        background-color: var(--bg-alt) !important;
    }
    .sessionTime {
        color: var(--accent);
    }

    .sessionErr {
        color: var(--text-muted);
        font-size: 1rem;
        font-family: "Roboto Mono";
    }
    .tracker {
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: center;
    }
    .trackerGrid {
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        gap: 0.75rem;

        width: max-content;
        max-width: 18rem;
        margin: 1rem auto;
    }

    .trackerUnit {
        width: 100%;
        aspect-ratio: 1;
        width: 1.5rem;

        border-radius: 2px;
        background: var(--bg-alt);
        border: 1px solid color-mix(in srgb, var(--border), transparent 40%);

        transition:
            transform 120ms ease,
            background-color 150ms ease;
    }

    .trackerUnit:hover {
        transform: scale(1.15);
        border-color: var(--accent);
    }

    .trackerUnit.level1 {
        background: color-mix(in srgb, var(--accent), var(--bg-alt) 75%);
    }

    .trackerUnit.level2 {
        background: color-mix(in srgb, var(--accent), var(--bg-alt) 55%);
    }

    .trackerUnit.level3 {
        background: color-mix(in srgb, var(--accent), var(--bg-alt) 35%);
    }

    .trackerUnit.level4 {
        background: color-mix(in srgb, var(--accent), var(--bg-alt) 15%);
    }

    .trackerUnit.level5 {
        background: var(--accent);
    }
</style>
