**Emergency Locator Transmitters (ELTs) and Related Distress Beacons**

**History, Variants and Technology Evolution**

**Executive Summary**

Emergency Locator Transmitters (ELTs) and their maritime Emergency Position Indicating Radio Beacon (EPIRB) and Personal Locator Beacon (PLB) variants form the backbone of the international COSPASS- SARSAT satellite-aided Search and Rescue (SAR) system. COSPASS from the Russian acronym for \"Space System for the Search of Vessels in Distress\" and SARSAT from the English \"Search and Rescue Satellite-Aided Tracking.\"

Originating from limitations of 1950s-1970s analogue 121.5 MHz beacons, the system evolved through international collaborations. The move to 406.025 MHz frequency digital beacons in the 1980s combined with GNSS (Global Navigation Satellite System, a generic term for any satellite-based system that provides global coverage for Positioning, Navigation, and Timing services) integration and Return Link Service (RLS) has dramatically improved detection speed, location accuracy (often \<100 meters), false alarm reduction and lives saved.

This paper traces the history, technical progression, beacon variants, current capabilities and future directions.

**Introduction**

Distress beacons provide a critical last-resort lifeline in aviation, maritime and remote emergencies when conventional communications fail. ELTs (Emergency Locator Transmitter) for aircrafts, EPIRBs (Emergency Position Indicating Radio Beacon) for sea vessels and PLBs (Personal Locator Beacon) for individuals, transmit distress alerts to satellites, enabling rapid Search and Rescue (SAR) response. The COSPASS- SARSAT programme, a treaty-based nonprofit collaboration of 45+ nations and agencies, including India operates the global infrastructure.

**Historical Development**

- **1950s--1970s (Pre-satellite era)**: Military developed analogue ELTs on 121.5 MHz (civil aviation distress frequency) and 243 MHz (military UHF). These transmitted continuous sweeping tones for homing by nearby aircraft or ground teams. The 1972 disappearance of a U.S. congressional plane in Alaska prompted the U.S. to mandate ELTs on most civil aircraft.

- **1979**: Canada, France, USA, and USSR signed memoranda forming COSPASS (Soviet) and - SARSAT (U.S./Canada/France) programmes.

- **1982**: First experimental satellite launches; first emergency detection (Sep 9) and rescue (Sep 10) of a crashed light aircraft in British Columbia, Canada. First emergency maritime rescue followed in October, a capsized trimaran (yacht with three hulls in parallel) off Boston, USA.

- **1984--1988**: System declared operational; international treaty signed.

- **1990s**: Introduction of GPS-encoded 406 MHz beacons.

- **2009**: Satellite monitoring of 121.5/243 MHz phased out due to high false alarms and inefficiency.

- **2010s--2020s**: Galileo Return Link Service (RLS) operational \~2020; second-generation beacons (SGB) emerging.

**Technology Evolution**

> **Early 121.5 MHz ELTs**:

- Analog continuous tone.

- Low power, line-of-sight only.

- Required overflying aircraft or nearby receivers.

- No unique ID → high false alarms (often 90%+).

- Frequency drift due to changes in temperature.

- Short battery life; no global satellite detection.

> **406.025 MHz Digital Beacons** (primary since 1980s):

- Dedicated protected band (406.0--406.1 MHz).

- Short high-power (5 W) digital bursts (\~0.5 s every 50 s) → conserves battery (24--48+ hours).

- 15-character hexadecimal unique ID (HEX ID).

- Registration links to owner, vessel/aircraft details, and contacts → verifies alerts and reduces false alarms.

- Doppler ^1^ processing Low-Earth Orbit Search and Rescue (LEOSAR) initially yielded \~5 km accuracy; later GNSS integration provides \~100 m or better.

- Dual-frequency models include low-power 121.5 MHz for final homing by rescue teams.

> **Constellation Evolution**:

- **LEOSAR**: Polar-orbiting LEO satellites → good global coverage but intermittent passes; Doppler location.

- **GEOSAR**: Geostationary satellites (e.g., GOES) → near-instant alert detection but poor polar coverage and no inherent location (Doppler unavailable).

> **Modern Enhancements**:

- GNSS (GPS, Galileo, etc.) self-location in beacons.

- **Return Link Service (RLS)**: Via Galileo (operational since \~2020; beacons receive confirmation that the alert was received and forwarded to SAR authorities. Reduces uncertainty and panic.

- **Second-Generation Beacons (SGB)**: Spread-spectrum modulation, more data capacity, support for RLS/Two-Way Communication (TWC), Emergency Locator Transmitter Distress Tracking (ELT(DT))^2^ for inflight activation on anomalies.

**Beacon Variants**

- **ELT (Emergency Locator Transmitter)**: Fixed or portable on aircraft; automatic G-switch activation on impact + manual. Some feed position from aircraft GPS. Required on most civil aircraft.

- **EPIRB (Emergency Position-Indicating Radio Beacon)**: Maritime; Category I (auto-hydrostatic release on sinking), Category II (manual). Floats, 48+ hour battery, strobe light.

- **PLB (Personal Locator Beacon)**: Handheld, manual activation only. Compact for hikers, boaters, etc. 24+ hour operation.

All modern variants are 406 MHz; older 121.5 MHz units are legacy only.

**Current Performance and Impact**

- Near-instant global alerting (minutes vs. hours/days).

- Precise location → tiny search areas.

- Registration → high verification rate.

- Lives saved: \> 50 K people (1982--Dec 2020)

- 700,000 beacons registered in U.S. database alone.

**Challenges and Future Directions**

- Battery life, survivability in crashes/fires, cost.

- Regulatory transition to mandatory SGB/RLS capable beacons.

- Integration with ADS-B, AIS, IoT, and autonomous systems.

- ELT(DT) for in-flight distress tracking.

- Emerging: GPS Block IIIF SAR payloads (\~2026+), advanced batteries, miniaturization.

**Conclusion**

The evolution from unreliable local 121.5 MHz analogue beacons to a robust, multi-constellation 406 MHz digital system with GNSS and RLS represents one of the most successful international humanitarian technologies. It continues to save thousands of lives annually and will evolve further with second-generation capabilities and broader integration.

^1^ **Doppler location** (or **Doppler processing**) in the context of **COSPASS-SARSAT** refers to the method used primarily by the **LEOSAR** (Low-Earth Orbit Search and Rescue) system to calculate the geographic position of an activated distress beacon (like an ELT, EPIRB, or PLB) without needing GPS/GNSS data from the beacon itself.

It relies on the **Doppler effect**, the same physics principle behind why a siren sounds higher-pitched when a train approaches you and lower-pitched as it moves away.

The Doppler effect causes a change in the observed frequency of a wave (here, the radio signal at 406.025 MHz) due to relative motion between the source (the stationary beacon on the ground/sea) and the observer (the fast-moving satellite).

- The satellite orbits Earth at high speed (\~7--8 km/s for low-Earth orbit satellites at \~800--1,500 km altitude).

- As the satellite approaches the beacon during its pass overhead:

  - The received frequency appears **higher** than the actual transmitted frequency (blue-shifted).

- At the exact moment the satellite is directly overhead (closest point, zero relative radial velocity):

  - The frequency matches the transmitted frequency (no shift).

- As the satellite moves away:

  - The received frequency appears **lower** (red-shifted).

By measuring how the frequency of the beacon\'s short digital bursts changes over time during a single satellite pass (typically 10--15 minutes of visibility), the ground station (LEOLUT, Low-Earth Orbit Local User Terminal) can plot a **Doppler curve**, a graph of frequency shift vs. time.

The **shape and timing** of the Doppler curve depend on:

- The beacon\'s position relative to the satellite\'s ground track (path over Earth\'s surface).

- The satellite\'s known orbit and velocity.

The point of **zero Doppler shift** (frequency matches exactly) corresponds to when the satellite is at its closest approach to the beacon.

The **rate of change** (how quickly the frequency rises and falls) indicates how far off to the side the beacon is from the ground track.

This produces **two possible locations**:

- One on each side of the satellite\'s path (a \"mirror image\" ambiguity).

To resolve the ambiguity (determine the true position):

- Data from a second satellite pass (different orbit) is often used.

- Or modern beacons include embedded GNSS coordinates, which eliminate the ambiguity and improve accuracy dramatically.

The system calculates the intersection of these constraints to pinpoint the beacon.

^2^ ELT(DT) technology, which detects anomalies (e.g., unusual attitudes, rapid descent, loss of control) and transmits distress alerts **while still airborne** did not exist in certified form for commercial aircraft in 2014 when MH370 disappeared. The concept of **Autonomous Distress Tracking (ADT)** under ICAO\'s **Global Aeronautical Distress and Safety System (GADSS)** was developed largely **in response to MH370** (and earlier incidents like Air France 447).

GADSS requirements for ADT (inflight distress tracking via ELT(DT)) were introduced progressively starting around 2021 with full mandates coming later.
