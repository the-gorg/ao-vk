#version 450
// ffp_glow_noterrain.frag with no discard (ffp_nocut.frag's reason: early-Z kept).
#define RVK_GLOW
#define RVK_NO_TERRAIN
#define RVK_NO_CUTOUT
#include "ffp_main.glsl"
