
export function downloadRegistrationCard(opts = {}) {
    const {
        registrationCodes = [],
        labels = {},
        filename = "registration-confirmation.png",
    } = opts;

    const {
        title = "रजिस्ट्रेशन सफल!",
        subtitle = "आपका रजिस्ट्रेशन सफलतापूर्वक पूर्ण हो गया है।",
        codeLabel = "वेटिंग नंबर:",
        participant = "प्रतिभागी",
        footer = "यह आपका वेटिंग नंबर है। कृपया इसे नोट कर लें।",
    } = labels;

    // ── Layout constants ──────────────────────────────────────────────────
    const scale = 2;          // retina quality
    const W = 520;
    const rowH = 64;
    const paddingX = 36;
    const headerH = 180;
    const footerH = 60;
    const totalH = headerH + registrationCodes.length * (rowH + 12) + footerH;

    // ── Canvas setup ──────────────────────────────────────────────────────
    const canvas = document.createElement("canvas");
    canvas.width = W * scale;
    canvas.height = totalH * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);

    // ── Background ────────────────────────────────────────────────────────
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, totalH);

    // ── Top green accent bar ──────────────────────────────────────────────
    ctx.fillStyle = "#22c55e";
    ctx.fillRect(0, 0, W, 6);

    // ── Checkmark circle ─────────────────────────────────────────────────
    const cx = W / 2;
    ctx.beginPath();
    ctx.arc(cx, 52, 26, 0, Math.PI * 2);
    ctx.fillStyle = "#dcfce7";
    ctx.fill();
    ctx.font = "bold 28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#16a34a";
    ctx.fillText("✓", cx, 62);

    // ── Title ─────────────────────────────────────────────────────────────
    ctx.font = "bold 22px sans-serif";
    ctx.fillStyle = "#111827";
    ctx.textAlign = "center";
    ctx.fillText(title, cx, 108);

    // ── Subtitle ──────────────────────────────────────────────────────────
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#6b7280";
    ctx.fillText(subtitle, cx, 130);

    // ── Divider ───────────────────────────────────────────────────────────
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(paddingX, 148);
    ctx.lineTo(W - paddingX, 148);
    ctx.stroke();

    // ── Code section label ────────────────────────────────────────────────
    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "#374151";
    ctx.textAlign = "center";
    ctx.fillText(codeLabel, cx, 168);

    // ── Code rows ─────────────────────────────────────────────────────────
    let y = headerH;
    registrationCodes.forEach((entry) => {
        const rowY = y;
        const rowW = W - paddingX * 2;

        // Row background pill
        ctx.fillStyle = "#f3f4f6";
        roundRect(ctx, paddingX, rowY, rowW, rowH, 8);
        ctx.fill();

        // Name (left)
        ctx.font = "600 14px sans-serif";
        ctx.fillStyle = "#374151";
        ctx.textAlign = "left";
        ctx.fillText(entry.name, paddingX + 16, rowY + 28);

        // Participant label
        ctx.font = "11px sans-serif";
        ctx.fillStyle = "#9ca3af";
        ctx.fillText(participant, paddingX + 16, rowY + 46);

        // Code pill (right-aligned)
        const codeText = entry.code;
        ctx.font = "bold 16px monospace";
        const codeW = ctx.measureText(codeText).width + 28;
        const codeX = W - paddingX - codeW - 8;
        const codeY = rowY + 14;
        const codeH = 36;

        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#d1d5db";
        ctx.lineWidth = 1.5;
        roundRect(ctx, codeX, codeY, codeW, codeH, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#111827";
        ctx.textAlign = "center";
        ctx.fillText(codeText, codeX + codeW / 2, codeY + 23);

        y += rowH + 12;
    });

    // ── Footer note ───────────────────────────────────────────────────────
    ctx.font = "12px sans-serif";
    ctx.fillStyle = "#9ca3af";
    ctx.textAlign = "center";
    ctx.fillText(footer, cx, y + 28);

    // ── Bottom amber accent bar ───────────────────────────────────────────
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(0, totalH - 4, W, 4);

    // ── Trigger download ──────────────────────────────────────────────────
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
}

// ── Helper: rounded-rectangle path ──────────────────────────────────────
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}