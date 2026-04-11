**Why Shorter Wavelength Does Not Always Mean Shorter Range**

**Understanding Medium Wave (MW) and Short Wave (SW) Propagation**

A common intuition in electromagnetics is that shorter wavelengths travel shorter distances, because higher-frequency signals experience greater free-space path loss. While this intuition is correct for line-of-sight free-space propagation, it does not universally apply to radio broadcasting, particularly in the Medium Wave (MW) and Short Wave (SW) bands.

The key reason is that communication range is determined not by wavelength alone, but by the dominant propagation mechanism. The mistake is assuming that radio waves always travel through empty space. In MW and SW, the Earth and the ionosphere become part of the transmission system.

**Free-space propagation**

In free space, electromagnetic waves spread spherically and received power decreases with distance according to the free-space path loss relation, which increases with frequency. Under these conditions:

- Higher frequency (shorter wavelength) signals attenuate faster

- Communication range is limited by line-of-sight

This model accurately describes **FM, microwave, satellite, and optical links**, where waves propagate primarily through free space without interacting strongly with the Earth or the atmosphere.

**In free space**

- Path loss increases with frequency for a fixed distance.

- Shorter wavelength ⇒ higher free-space path loss

- So higher frequencies "die out" faster

**Ground-wave propagation**

Medium Wave signals (530 to 1710 kHz, wavelengths of 175 to 566 m) are long enough to **strongly couple to the Earth's surface**. This enables **ground-wave propagation**, where the wave follows the curvature of the Earth rather than radiating away into space.

Key characteristics:

- The wave "hugs" the ground due to boundary interaction

- Lower frequencies experience less attenuation along the surface

- Soil conductivity (especially coastal regions) greatly enhances range

Typical daytime medium-wave (MW) ground-wave transmission ranges are on the order of 100--400 km over land, depending on transmitter power, operating frequency, and ground conductivity. High-power broadcast transmitters can reliably deliver usable signal strength over 200--400 km, and under favourable conditions may extend beyond 500 km. Over highly conductive paths such as seawater or coastal regions, ground-wave propagation can occasionally support distances approaching 500--1000 km.

Practical range is also limited by environmental noise and ground conductivity. Urban electrical noise can significantly reduce usable range, and poor soil conductivity (e.g., dry desert terrain) can limit effective ground-wave coverage well below ideal values.

FM signals, with wavelengths of \~3 m, are too short to couple effectively with the Earth's surface and therefore cannot form a usable ground wave, limiting them to Line of Sight (LOS) propagation.

**Ionospheric propagation**

Short Wave signals (3 to 30 MHz, wavelengths of 10 to 100 m) exploit a completely different mechanism: **ionospheric refraction**.

The ionosphere is a plasma layer located roughly 60 to 400 km above the Earth. At SW frequencies, the ionosphere refracts radio waves back toward the Earth. **In effect, the ionosphere bends the signal back toward Earth, enabling communication beyond the horizon.**

- Single-hop propagation of 1,000 to 3,000 km

- Multi-hop propagation of 5,000 to 15,000 km or more

This makes intercontinental communication possible.

Importantly, this is **not mirror-like reflection**, but gradual refraction due to the frequency-dependent refractive index of the ionospheric plasma.

At FM frequencies (\~100 MHz), waves pass through the ionosphere into space and do not return to Earth, eliminating the possibility of long-distance sky-wave propagation.

**The crucial insight: Range is governed by propagation mode, not wavelength alone.**

Shortwave propagation is also strongly time dependent. During daytime, the lower ionospheric D-layer absorbs high-frequency (HF) signals, reducing long-distance coverage. At night, this absorbing layer largely disappears, allowing signals to refract more efficiently from higher ionospheric layers and travel much greater distances. The same transmitter operating at the same frequency can therefore reach dramatically different ranges depending on time of day.

| **Band** | **Typical wavelength** | **Dominant propagation**   | **Typical range**            |
|----------|------------------------|----------------------------|------------------------------|
| SW       | 10 to 100 m            | Ionospheric (sky-wave)     | Intercontinental (multi-hop) |
| MW       | 175 to 566 m           | Ground wave + sky-wave     | Regional to continental      |
| FM       | \~3 m                  | Line-of-sight (space wave) | Local                        |

Thus, wavelength alone does not determine range. Propagation physics does. What matters is whether the wave can:

- Couple to the Earth (MW), or

- Interact with the ionosphere (SW)
