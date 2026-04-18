## Executive Summary

Emergency Locator Transmitters (ELTs) and related distress beacons are among the most important life-saving wireless systems ever built.

When an aircraft crashes or a boat/ship is lost at sea, these devices transmit simple radio signals that satellites, aircraft or land-based emergency stations detect. From those signals alone, global systems can determine where help is needed.

What makes this remarkable is that location can be estimated even without GPS data from the beacon. By using principles such as Doppler^1^ shift, signal timing, and geometry, the system extracts information about position and motion directly from the radio signal itself.

Over the decades, the system has evolved from simple analog beacons operating at 121.5 MHz to modern 406 MHz digital beacons integrated with GNSS and Return Link Service (RLS), dramatically improving accuracy, reliability, and lives saved.

This paper explores how these systems work, how they evolved and what they reveal about the fundamental principles that govern all wireless systems.

## Introduction

Imagine an aircraft has crashed in a remote region with no communication.

How does anyone know where to search?

This is the problem Emergency Locator Transmitters (ELTs) are designed to solve.

ELTs (Emergency Locator Transmitter) for aircraft, EPIRBs (Emergency Position Indicating Radio Beacon) for maritime use and PLBs (Personal Locator Beacon) for individuals transmit distress signals that are detected by satellites in the international COSPAS-SARSAT (a treaty-based nonprofit collaboration of 45+ nations and agencies, including India operates the global infrastructure) system. These signals trigger search and rescue operations across the world.

What makes these systems particularly interesting from an engineering perspective is not just their reliability but how they extract location from very limited information.

In most cases, the beacon does not transmit its position. Instead, the system infers location using:

- frequency changes caused by motion (Doppler)

- signal timing

- and geometric relationships between satellites and the beacon

This makes ELT systems an excellent real-world example of how wireless signals inherently carry information about space and motion, not just data.

## Historical Development

- **1950s--1970s (Pre-satellite era)**: Military developed analogue ELTs on 121.5 MHz (civil aviation distress frequency) and 243 MHz (military UHF). These transmitted continuous sweeping tones for homing by nearby aircraft or ground teams. The 1972 disappearance of a U.S. congressional plane in Alaska prompted the U.S. to mandate ELTs on most civil aircraft.

- **1979**: Canada, France, USA and USSR signed memoranda forming COSPAS (Soviet) and SARSAT (U.S./Canada/France) programmes.

- **1982**: First experimental satellite launches; first emergency detection (Sep 9) and rescue (Sep 10) of a crashed light aircraft in British Columbia, Canada. First emergency maritime rescue followed in October, a capsized yacht off Boston, USA.

- **1984--1988**: System declared operational; international treaty signed.

- **1990s**: Introduction of GPS-encoded 406 MHz beacons.

- **2009**: Satellite monitoring of 121.5/243 MHz phased out due to high false alarms and inefficiency.

- **2010s--2020s**: Galileo Return Link Service (RLS) operational \~2020; second-generation beacons (SGB) emerging.

## Technology Evolution

### Early 121.5 MHz ELTs: {#early-121.5-mhz-elts}

- Analog continuous tone.

- Low power, line-of-sight only.

- Required overflying aircraft or nearby receivers.

- No unique ID → high false alarms (often 90%+).

- Frequency drift due to changes in temperature.

- Short battery life; no global satellite detection.

### 406.025 MHz Digital Beacons (primary since 1980s): {#mhz-digital-beacons-primary-since-1980s}

- Dedicated protected band (406.0--406.1 MHz).

- Short, high-power (5 W) digital bursts (\~0.5 s every 50 s) → conserves battery (24--48+ hours).

- 15-character hexadecimal unique ID (HEX ID).

- Registration links to owner, vessel/aircraft details, and contacts → verifies alerts and reduces false alarms.

- Doppler processing in Low-Earth Orbit Search and Rescue (LEOSAR) initially yielded \~5 km accuracy; later GNSS integration provides \~100 m or better.

- Dual-frequency models include low-power 121.5 MHz for final homing by rescue teams.

### Constellation Evolution:

- LEOSAR: Polar-orbiting LEO satellites → good global coverage but intermittent passes; Doppler location.

- GEOSAR: Geostationary satellites (e.g., GOES) → near-instant alert detection but poor polar coverage and no inherent location capability (no Doppler based location capability).

### Modern Enhancements:

- GNSS (GPS, Galileo, etc.) self-location in beacons.

- Return Link Service (RLS): Via Galileo (operational since \~2020; beacons receive confirmation that the alert was received and forwarded to SAR authorities. Reduces uncertainty and panic.

- Second-Generation Beacons (SGB): Spread-spectrum modulation, more data capacity, support for RLS/Two-Way Communication (TWC), Emergency Locator Transmitter Distress Tracking (ELT(DT))2 for inflight activation on anomalies.

## Beacon Variants

- **ELT (Emergency Locator Transmitter)**: Fixed or portable on aircraft; automatic G-switch activation on impact + manual. Some feed position from aircraft GPS. Required on most civil aircraft.

- **EPIRB (Emergency Position-Indicating Radio Beacon)**: Maritime; Category I (auto-hydrostatic release on sinking), Category II (manual). Floats, 48+ hour battery, strobe light.

- **PLB (Personal Locator Beacon)**: Handheld, manual activation only. Compact for hikers, boaters, etc. 24+ hour operation.

All modern variants are 406 MHz; older 121.5 MHz units are legacy only.

## Performance and Why It Matters

Modern ELT systems have transformed search and rescue from a slow uncertain process into a precise and time-critical operation.

Today, distress alerts can be detected within minutes anywhere on Earth and locations can often be determined to within 100 meters or better. This dramatically reduces search areas and response time.

These improvements are not just the result of better hardware. They come from the effective use of fundamental principles:

- **Doppler shift** enables location even without GPS

- **Precise timing** improves distance estimation

- **Better geometry** (multi-satellite constellations) improves accuracy and reliability

The result is measurable impact:

- Tens of thousands of lives saved since system deployment

- Rapid global detection compared to earlier systems that relied on chance overflight

- Significant reduction in false alarms through beacon identification and registration

The effectiveness of these systems comes not just from stronger signals or better devices, but from how well they exploit time, motion, and geometry.

## Challenges and Future Directions

- Battery life, survivability in crashes/fires, cost.

- Regulatory transition to mandatory SGB/RLS capable beacons.

- Integration with ADS-B, AIS, IoT, and autonomous systems.

- ELT(DT) for in-flight distress tracking.

- Emerging: GPS Block IIIF SAR payloads (\~2026+), advanced batteries, miniaturization.

## Conclusion

The evolution from unreliable local 121.5 MHz analogue beacons to a robust, multi-constellation 406 MHz digital system with GNSS and RLS represents one of the most successful international humanitarian technologies. It continues to save thousands of lives annually and will evolve further with second-generation capabilities and broader integration.

These systems are a practical demonstration of the core idea that wireless signals inherently carry information about space, time, and motion. System design is fundamentally about extracting that information under real-world constraints.


## Footnotes

## ^1^


## Doppler-Based Location: How Motion Reveals Position

Even if a distress beacon does not transmit its location, satellites can still estimate where it is.

This is possible because of the **Doppler effect**. The same physics principle behind why a siren sounds higher-pitched when a train approaches you and lower-pitched as it moves away.

### How It Works  {#how-it-works}

In the COSPAS-SARSAT system, a fast-moving satellite observes the frequency of the beacon signal as it passes overhead.

Because the satellite orbits Earth at high speed (\~7--8 km/s for low-Earth orbit satellites at \~800--1,500 km altitude), the received frequency changes over time:

- As the satellite approaches the beacon → the frequency appears higher

- At closest approach → the frequency matches the transmitted value

- As the satellite moves away → the frequency appears lower

### From Frequency Change to Location

During a typical satellite pass (about 10--15 minutes), the system measures how the frequency changes over time. By measuring this change in frequency during a single satellite pass, ground stations can construct a **Doppler curve**, a plot of frequency shift versus time.

The shape of this curve depends on:

- the beacon's position relative to the satellite's ground track

- the satellite's known orbit and velocity

The point of no frequency change (zero Doppler shift) corresponds to the moment of closest approach.

The rate at which the frequency changes reveal how far the beacon is from the satellite's path.

This results in two possible location solution, one on each side of the satellite's ground track (a mirror-image ambiguity).

### Why One Satellite Pass Is Not Enough

A single satellite pass does not uniquely determine the beacon's location. It produces two possible locations, one on each side of the satellite's ground track. This ambiguity arises because the Doppler measurement is symmetric about the path of the satellite.

Resolving this mirror image ambiguity requires an additional observation with different geometry. This can be achieved through:

- a subsequent satellite pass with a different ground track, or

- observations from another satellite with a different orbit

If the geometry remains unchanged, the ambiguity persists.

Modern beacons often include GNSS coordinates, which eliminate this ambiguity entirely.

The final position is obtained by combining these geometric constraints.


## ^1^

ELT(DT) technology, which detects anomalies (e.g., unusual attitudes, rapid descent, loss of control) in aircrafts and transmits distress alerts **while still airborne** did not exist in certified form for commercial aircrafts in 2014 when MH370 disappeared. The concept of **Autonomous Distress Tracking (ADT)** under ICAO\'s **Global Aeronautical Distress and Safety System (GADSS)** was developed largely **in response to MH370** (and earlier incidents like Air France 447).

GADSS requirements for ADT (inflight distress tracking via ELT(DT)) were introduced progressively starting around 2021 with full mandates coming later.
