export const media = {
  "cenotes": {
    "photos": [
      "/cenotes/photos/cenotes-photo-001.webp",
      "/cenotes/photos/cenotes-photo-002.webp",
      "/cenotes/photos/cenotes-photo-003.webp",
      "/cenotes/photos/cenotes-photo-004.webp",
      "/cenotes/photos/cenotes-photo-005.webp",
      "/cenotes/photos/cenotes-photo-006.webp",
      "/cenotes/photos/cenotes-photo-007.webp",
      "/cenotes/photos/cenotes-photo-008.webp",
      "/cenotes/photos/cenotes-photo-009.webp"
    ],
    "videos": [
      "/cenotes/videos/cenotes-video-001.mp4",
      "/cenotes/videos/cenotes-video-002.mp4"
    ]
  },
  "habitaciones": {
    "photos": [
      "/habitaciones/photos/habitaciones-photo-001.webp",
      "/habitaciones/photos/habitaciones-photo-002.webp",
      "/habitaciones/photos/habitaciones-photo-003.webp",
      "/habitaciones/photos/habitaciones-photo-004.webp",
      "/habitaciones/photos/habitaciones-photo-005.webp",
      "/habitaciones/photos/habitaciones-photo-006.webp",
      "/habitaciones/photos/habitaciones-photo-007.webp",
      "/habitaciones/photos/habitaciones-photo-008.webp",
      "/habitaciones/photos/habitaciones-photo-009.webp",
      "/habitaciones/photos/habitaciones-photo-010.webp",
      "/habitaciones/photos/habitaciones-photo-011.webp",
      "/habitaciones/photos/habitaciones-photo-012.webp",
      "/habitaciones/photos/habitaciones-photo-013.webp",
      "/habitaciones/photos/habitaciones-photo-014.webp",
      "/habitaciones/photos/habitaciones-photo-015.webp",
      "/habitaciones/photos/habitaciones-photo-016.webp",
      "/habitaciones/photos/habitaciones-photo-017.webp",
      "/habitaciones/photos/habitaciones-photo-018.webp",
      "/habitaciones/photos/habitaciones-photo-019.webp",
      "/habitaciones/photos/habitaciones-photo-020.webp",
      "/habitaciones/photos/habitaciones-photo-021.webp",
      "/habitaciones/photos/habitaciones-photo-022.webp",
      "/habitaciones/photos/habitaciones-photo-023.webp",
      "/habitaciones/photos/habitaciones-photo-024.webp",
      "/habitaciones/photos/habitaciones-photo-025.webp",
      "/habitaciones/photos/habitaciones-photo-026.webp",
      "/habitaciones/photos/habitaciones-photo-027.webp",
      "/habitaciones/photos/habitaciones-photo-028.webp",
      "/habitaciones/photos/habitaciones-photo-029.webp",
      "/habitaciones/photos/habitaciones-photo-030.webp",
      "/habitaciones/photos/habitaciones-photo-031.webp",
      "/habitaciones/photos/habitaciones-photo-032.webp",
      "/habitaciones/photos/habitaciones-photo-033.webp",
      "/habitaciones/photos/habitaciones-photo-034.webp",
      "/habitaciones/photos/habitaciones-photo-035.webp",
      "/habitaciones/photos/habitaciones-photo-036.webp",
      "/habitaciones/photos/habitaciones-photo-037.webp",
      "/habitaciones/photos/habitaciones-photo-038.webp",
      "/habitaciones/photos/habitaciones-photo-039.webp",
      "/habitaciones/photos/habitaciones-photo-040.webp"
    ],
    "videos": [
      "/habitaciones/videos/habitaciones-video-001.mp4",
      "/habitaciones/videos/habitaciones-video-002.mp4",
      "/habitaciones/videos/habitaciones-video-003.mp4",
      "/habitaciones/videos/habitaciones-video-004.mp4",
      "/habitaciones/videos/habitaciones-video-005.mp4",
      "/habitaciones/videos/habitaciones-video-006.mp4",
      "/habitaciones/videos/habitaciones-video-007.mp4",
      "/habitaciones/videos/habitaciones-video-008.mp4",
      "/habitaciones/videos/habitaciones-video-009.mp4",
      "/habitaciones/videos/habitaciones-video-010.mp4"
    ]
  }
} as const;

export type MediaSection = keyof typeof media;
