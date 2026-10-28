#version 450
// ffp_glow.frag for every draw that isn't the ground (RVK_NO_TERRAIN): terrain.glsl's ground-only code folds away, and
// with it the registers it costs the rest of the scene (the draw selects it by its record: terrainAt.w 0).
#define RVK_GLOW
#define RVK_NO_TERRAIN
#include "ffp_main.glsl"
