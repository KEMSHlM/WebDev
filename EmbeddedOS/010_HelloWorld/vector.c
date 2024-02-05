#include "defines.h"

extern void start(void);

void (*vector[])(void) = {
    start, NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
    NULL,  NULL, NULL, NULL, NULL,  NULL, NULL, NULL,
};
