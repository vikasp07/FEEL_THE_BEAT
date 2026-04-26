"use client";

import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Download, ImagePlus, Sparkles, UploadCloud, Video } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

type MediaType = "image" | "video" | null;

export default function ImageUpload() {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<MediaType>(null);
  const [fileName, setFileName] = useState("your-moment");

  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canProcessImage = useMemo(() => mediaType === "image" && previewSrc, [mediaType, previewSrc]);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setFileName(file.name.split(".")[0] ?? "your-moment");

    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");

    const source = URL.createObjectURL(file);
    setPreviewSrc(source);
    setProcessedSrc(null);

    if (isVideo) {
      setMediaType("video");
    } else if (isImage) {
      setMediaType("image");
    } else {
      setMediaType(null);
    }
  };

  const processImage = () => {
    if (!canvasRef.current || !previewSrc || mediaType !== "image") {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const img = new window.Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0);

      const glow = context.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.08,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.65,
      );

      glow.addColorStop(0, "rgba(255, 0, 0, 0.30)");
      glow.addColorStop(0.4, "rgba(255, 0, 0, 0.18)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0.58)");

      context.fillStyle = glow;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "rgba(0, 0, 0, 0.75)";
      context.fillRect(0, canvas.height - 95, canvas.width, 95);

      context.fillStyle = "#ffffff";
      context.font = `${Math.max(18, canvas.width * 0.03)}px sans-serif`;
      context.fillText("See Yourself Dancing Here", 24, canvas.height - 56);

      context.fillStyle = "rgba(255, 0, 0, 0.95)";
      context.font = `${Math.max(16, canvas.width * 0.024)}px sans-serif`;
      context.fillText("Aniket's Feel The Beat Dance Academy", 24, canvas.height - 28);

      setProcessedSrc(canvas.toDataURL("image/png"));
    };

    img.src = previewSrc;
  };

  return (
    <section className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200">
            <Sparkles className="h-4 w-4" />
            See Yourself Dancing Here
          </div>
          <h2 className="font-display text-5xl text-white sm:text-6xl">Upload Your Moment</h2>
          <p className="mt-4 text-white">
            Upload an image or short video and preview it with studio glow and academy watermark.
          </p>
        </motion.div>

        <Card className="mx-auto max-w-5xl rounded-3xl p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-[340px_1fr]">
            <div>
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="beat-reactive flex h-52 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-red-500/40 bg-red-400/5 text-red-200 transition-colors hover:bg-red-400/10"
              >
                <UploadCloud className="h-10 w-10" />
                <span className="mt-3 text-sm font-semibold">Upload Image or Video</span>
                <span className="mt-1 text-xs text-white">JPG, PNG, MP4 supported</span>
              </button>

              <input
                ref={inputRef}
                type="file"
                accept="image/*,video/*"
                onChange={onFileChange}
                className="hidden"
              />

              <div className="mt-4 space-y-3">
                <Button
                  onClick={processImage}
                  disabled={!canProcessImage}
                  className="w-full"
                  variant="secondary"
                >
                  <ImagePlus className="mr-2 h-4 w-4" /> Add Overlay + Watermark
                </Button>

                {processedSrc ? (
                  <a href={processedSrc} download={`${fileName}-feel-the-beat.png`} className="block">
                    <Button className="w-full" variant="outline">
                      <Download className="mr-2 h-4 w-4" /> Download Edited Image
                    </Button>
                  </a>
                ) : null}
              </div>
            </div>

            <div>
              {!previewSrc ? (
                <div className="flex h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white">
                  Upload media to preview your dance vibe
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  {mediaType === "video" ? (
                    <div className="relative h-[320px] bg-black">
                      <video src={previewSrc} controls className="h-full w-full object-cover" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-red-400/10" />
                      <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/65 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200">
                        <Video className="mr-2 inline h-3.5 w-3.5" /> Feel The Beat
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-[320px] bg-black">
                      <Image
                        src={processedSrc ?? previewSrc}
                        alt="Uploaded dance preview with studio overlay"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        unoptimized
                        className="object-cover"
                      />
                      {!processedSrc ? (
                        <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/65 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200">
                          <ImagePlus className="mr-2 inline h-3.5 w-3.5" /> Raw Preview
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </section>
  );
}
