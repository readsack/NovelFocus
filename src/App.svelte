<script>
    import { onMount, tick } from "svelte";
    import figlet from "figlet";
    import ansi_regular from "figlet/fonts/Slant";
    figlet.parseFont("ANSI Regular", ansi_regular);
    let timer = document.createElement("div");

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

    function startTimer(duration, timerEl) {
        let startTime = 0;
        let targetDuration = 0;

        targetDuration = duration;
        startTime = performance.now();
        console.log(targetDuration);
        function timerTick() {
            let elapsedTime = performance.now() - startTime;
            let remainingTime = Math.max(
                0,
                targetDuration * 1000 - elapsedTime,
            );
            let timeString = formatTimeString(Math.ceil(remainingTime / 1000));
            timerEl.innerText = figlet.textSync(timeString, "ANSI Regular");
            if (remainingTime > 0) requestAnimationFrame(timerTick);
            else return;
        }
        requestAnimationFrame(timerTick);
    }

    onMount(() => {
        let seconds = 4000;
        startTimer(seconds, timer);
    });
</script>

<div class="body">
    <div class="area">
        <div class="sidebar">
            <div class="sessions"></div>
            <div class="tracker"></div>
        </div>
        <div class="timer" bind:this={timer}></div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");
    * {
        background-color: var(--bg);
    }
    .body {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
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
        font-size: 2.2em;
    }
    .sidebar > div {
        border: 3px solid var(--border);
        transition: ease all 300ms;
    }

    .timer:hover,
    .sidebar > div:hover {
        border-color: var(--accent);
    }
</style>
