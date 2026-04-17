**GNSS: Why Positioning Is Harder Than It Looks**

**Executive Summary**

Global Navigation Satellite Systems (GNSS) such as **GPS** and **Galileo** are often perceived as mature, solved technologies that simply "work everywhere." In reality, GNSS positioning is a fragile inference problem that succeeds only when **time accuracy, geometry, signal environment and system assumptions align simultaneously**.

GNSS is one of the clearest real-world examples of how time, geometry and signal propagation interact to produce position estimates.

This white paper explains why GNSS positioning is fundamentally harder than it appears. Building on the concepts of Doppler, time, geometry, and clock offsets, it examines real-world error sources, multipath, atmospheric delay, satellite geometry, clock behaviour, and environmental blockage. This shows why more satellites or more processing power do not automatically lead to better position estimates. The goal is not to describe or study every error term, but to develop **engineering intuition** about why GNSS works when it does, and why it fails when conditions degrade.

**1. The Illusion of Simplicity**

At a high level, GNSS positioning appears straightforward:

1.  Satellites broadcast timestamped signals

2.  Receivers measure signal arrival times

3.  Distances are computed from time delay

4.  Position is obtained by Pseudorange-based multilateration with clock bias estimation

This simplicity hides a critical fact:

**GNSS is not a direct measurement of position. It is an inference made under uncertainty.**

Every GNSS position fix depends on assumptions about:

- Clock behaviour

- Signal propagation

- Satellite geometry

- Environmental conditions

When these assumptions are incorrect, even slightly, errors grow rapidly.

**2. GNSS Is a Time Measurement Problem First**

As established previously, GNSS pseudorange measurements are fundamentally **time measurements**.

A timing error of:

- 1 microsecond → \~300 meters

- 10 nanoseconds → \~3 meters

While satellite clocks are highly stable, receiver clocks are not. The system works only because:

- Receiver clock offset is explicitly estimated

- Multiple satellites provide redundant constraints

However, this also means:

**Any unmodeled timing bias appears directly as a position error.**

Timing is not just one error source among many; it is the **dominant sensitivity axis** of GNSS.

**2.1 Multilateration and the Fourth Unknown**

GNSS positioning is often described as trilateration --- the intersection of spheres whose radii are equal to measured distances from satellites.

However, GNSS receivers do not measure true distances. They measure **pseudoranges**, which include an unknown receiver clock offset.

For each satellite:

$$\rho_{i} = c\ \left( t_{r} - t_{s} \right) = \text{true range} + c\ \Delta t
$$

Where:

- $\rho_{i}$ = measured pseudorange

- $c$ = speed of light

- $\Delta t$ = receiver clock offset

Because the receiver clock is not synchronized to satellite time, there is an additional unknown. The receiver must therefore solve for:

- $x$

- $y$

- $z$

- $\Delta t$(clock bias)

This means GNSS positioning requires solving **four unknowns simultaneously**, which is why at least four satellites are required for a position fix.

GNSS is therefore not pure trilateration. It is Multilateration with simultaneous clock estimation. This coupling between space and time is what makes positioning fundamentally sensitive.

**3. Geometry Is a Silent but Dominant Constraint**

The quality of this four-unknown solution depends not only on timing accuracy, but also on how the satellites are geometrically arranged relative to the receiver.

Even with perfect timing, GNSS accuracy depends critically on **satellite geometry**.

If satellites are:

- Widely separated across the sky → strong geometric constraints

- Clustered in one region → weak constraints

This effect is quantified as **Geometric Dilution of Precision (GDOP)**.

Key insight:

**GNSS does not fail because measurements are noisy; it fails because geometry amplifies small errors into large spatial uncertainty.**

This explains why:

- Accuracy varies with time-of-day ^Appendix A^

- Multi-constellation receivers are more robust

- Polar, urban, and canyon environments behave very differently

Geometry is not a secondary detail; it is a first-order design variable.

**4. The Environment Is Not Empty Space**

GNSS theory assumes signals propagate through free space at the speed of light. Real environments violate this assumption in multiple ways.

**4.1 Ionospheric Delay**

- Frequency-dependent delay caused by charged particles

- Varies with solar activity, latitude, and time

- Mitigated (but not eliminated) by dual-frequency receivers

**4.2 Tropospheric Delay**

- Caused by water vapor and atmospheric pressure

- Non-dispersive and harder to model precisely

- Introduces slowly varying bias

These effects do not add noise; they add **bias**, which is far more dangerous ^Appendix B^

**5. Multipath: The Most Insidious Error Source**

Multipath occurs when GNSS signals:

- Reflect off buildings, terrain, or structures

- Arrive at the receiver via multiple paths

The receiver cannot easily distinguish:

- Direct signal

- Delayed reflections

Consequences:

- Biased pseudorange estimates

- Position errors that do not average out

- Severe degradation in urban environments

Key insight:

**Multipath corrupts time measurements while preserving signal strength, making it hard to detect and hard to correct.**

This is why GNSS can report "strong signal" yet produce poor position fixes.

**6. "More Satellites" Is Not a Universal Fix**

A common intuition is that adding more satellites always improves accuracy. This is only conditionally true.

Additional satellites help when they:

- Improve geometry

- Add independent viewing angles

They help far less when:

- Signals are correlated (e.g., same reflection surfaces)

- Geometry remains poor

- Environmental bias dominates

Thus:

**Quantity of measurements does not replace quality of constraints.**

This directly connects to the geometry limits discussed in White Paper 2.

**7. GNSS Is Fragile by Design**

GNSS signals are:

- Extremely weak at the Earth's surface

- Easily blocked, reflected, or interfered with

- Vulnerable to jamming and spoofing ^Appendix C^

This fragility is not accidental. GNSS prioritizes:

- Global coverage

- Passive reception

- Low satellite transmit power

The result is a system that is:

- Brilliant in open environments

- Brittle in constrained or adversarial ones

Understanding this fragility is essential for engineers working on:

- UAVs

- Autonomous systems

- Safety-critical navigation

**8. Why GNSS Often Fails Gracefully and Sometimes Doesn't**

GNSS receivers apply:

- Statistical estimation

- Consistency checks

- Residual analysis

These allow graceful degradation when:

- Errors are random

- Geometry is reasonable

However, GNSS fails catastrophically when:

- Biases dominate

- Geometry is poor

- Incorrect assumptions go undetected

This explains why:

- GNSS errors can jump suddenly

- "Last known good fix" can be misleading

- Confidence estimates are as important as position estimates

**9. The Engineering Takeaway**

GNSS success requires **simultaneous alignment** of:

- Accurate time

- Favourable geometry

- Clean signal propagation

- Valid modelling assumptions

Failure in any one dimension can dominate the solution.

The most important lesson is this:

**GNSS positioning is not about computing where you are. It is about knowing when you can trust the answer.**

**10. Conclusion**

GNSS appears simple because decades of engineering have hidden its complexity. Beneath that surface lies a system that balances time, geometry, physics, and environment with remarkable precision, but limited margin.

For engineers, the value of understanding GNSS lies not in memorizing error budgets, but in developing intuition about **why positioning is fundamentally hard** and why no amount of signal processing can bypass physical constraints.

This perspective is essential for designing resilient systems that rely on GNSS, but do not blindly trust it.

**Appendix A**

**Why GNSS Accuracy Varies with Time of Day**

GNSS accuracy at a fixed location is not constant over time. Even with the same receiver and environment, position accuracy can vary significantly throughout the day. This variation arises from several time-dependent factors.

**Time-Varying Satellite Geometry**

GNSS satellites move continuously in their orbits. As a result, the number of visible satellites and their relative placement in the sky change with time. This alters the **geometric dilution of precision (GDOP)**. Periods of widely spaced satellites yield stronger geometric constraints, while clustered satellite configurations amplify errors.

**Diurnal Ionospheric Behaviour**

The ionosphere is driven by solar radiation and exhibits strong day--night variation. During daytime, increased ionization introduces larger and more variable signal delays. At night, ionospheric conditions are typically calmer, often resulting in improved positioning accuracy.

**Tropospheric Variability**

Tropospheric delay depends on temperature, pressure, and water vapor content, all of which vary diurnally and with weather. These variations introduce slowly changing biases that affect timing measurements.

**Time-Varying Multipath**

In urban and semi-urban environments, multipath conditions change with traffic patterns, moving reflectors, and human activity. As reflective surfaces move or appear, the multipath error profile changes over time.

**System-Level Effects**

Satellite health status, ephemeris freshness, and constellation maintenance activities can also vary over time, contributing to subtle accuracy changes.

**Key Insight**

**GNSS accuracy is time-dependent because the physical and geometric conditions that enable positioning are themselves time-dependent.** Understanding this variability is essential for interpreting GNSS performance and for designing systems that rely on GNSS but cannot assume uniform accuracy.

**Appendix B**

**Bias vs Noise in Position Estimation**

GNSS positioning errors do not all behave the same way. A critical distinction must be made between:

- **Random noise**

- **Systematic bias**

Understanding this distinction is essential to interpreting GNSS performance and failure modes.

**Random Noise**

Random noise arises from:

- Thermal receiver noise

- Small tracking loop variations

- Minor signal distortions

- Short-term atmospheric fluctuations

Noise characteristics:

- Zero-mean (on average)

- Fluctuates around true value

- Tends to average out over time

- Reduces with longer integration

In positioning terms:

- Noise causes jitter.

- The position estimate "wanders" slightly.

- Averaging or filtering improves stability.

Noise degrades precision, but not necessarily correctness.

**Systematic Bias**

Bias is fundamentally different.

Bias arises from:

- Multipath reflections

- Atmospheric modeling errors

- Clock offsets not fully estimated

- Spoofed or delayed signals

- Satellite ephemeris errors

Bias characteristics:

- Persistent in one direction

- Does not average out

- Can remain internally consistent

- Often difficult to detect

In positioning terms:

- Bias shifts the solution.

- The receiver may report a stable but incorrect position.

- Averaging does not fix the error.

Bias degrades correctness, even when precision appears good.

**Why Geometry Amplifies Bias**

Earlier sections showed that GNSS solves for:

- Three spatial coordinates

- One clock offset

The solution depends on satellite geometry.

When geometry is weak:

- Small pseudorange biases project into large spatial errors.

- Errors stretch along poorly constrained directions.

This leads to:

- Elongated error ellipses

- Directional uncertainty

- Instability under biased conditions

Thus:

Geometry does not create bias. It amplifies it.

**Why Bias Is Harder to Detect**

Random noise produces visible jitter.

Bias often produces:

- Smooth, believable position shifts

- Stable but incorrect fixes

- Internally consistent solutions

This is especially dangerous when:

- Multipath is coherent

- Spoofing signals are coordinated

- Atmospheric models are slightly wrong

A receiver may compute a geometrically valid solution that is physically incorrect. The system believes itself.

**Precision vs Accuracy**

It is important to distinguish:

- **Precision**: How tightly measurements cluster

- **Accuracy**: How close the estimate is to the true value

Noise primarily affects precision. Bias primarily affects accuracy. A GNSS receiver can be:

- Highly precise but inaccurate (biased)

- Noisy but unbiased (correct on average)

In safety-critical systems, bias is typically more dangerous than noise.

**Key Insight**

GNSS is fundamentally an inference system. Inference systems are most vulnerable not to randomness, but to consistent misinformation. Noise causes uncertainty. Bias causes false certainty. Understanding this distinction is essential when evaluating GNSS reliability, especially in autonomous, aviation and critical infrastructure contexts.

**Appendix C**

**Why GNSS Is Vulnerable to Jamming and Spoofing**

GNSS is a remarkably precise positioning system. It is also structurally fragile. This fragility does not arise from poor engineering. It arises from fundamental physical and architectural choices.

This appendix explains why GNSS signals are vulnerable to both **jamming** and **spoofing**, and why these vulnerabilities are difficult to eliminate completely.

**Why GNSS Signals Are Extremely Weak**

GNSS satellites orbit at approximately 20,000 km altitude.

Although satellites transmit with significant power, the signal spreads spherically over that distance. By the time it reaches the Earth's surface:

- Received power is typically around −130 dBm or lower.

- The signal is below the thermal noise floor in a standard RF bandwidth.

GNSS receivers recover signals by:

- Using spread-spectrum correlation

- Integrating over time

- Exploiting known signal structure

This provides **processing gain**, allowing detection of signals that appear buried in noise. However, this also creates a vulnerability as any nearby transmitter that injects stronger interference can overwhelm the receiver front-end. The signal's weakness is a structural consequence of satellite distance.

**Jamming: Overpowering the Receiver**

**What Is Jamming?**

Jamming occurs when an external transmitter emits RF energy in the GNSS frequency band, raising the noise floor and preventing acquisition or tracking.

Because GNSS signals are so weak:

- A few milliwatts of broadband noise near a receiver can deny service.

- Even unintentional interference (e.g., malfunctioning electronics) can disrupt reception.

Jamming does not require knowledge of GNSS protocols. It only requires sufficient power at the right frequency.

**Why Jamming Is Easy**

- GNSS signals arrive at extremely low power.

- Receivers rely on correlation, not signal strength.

- The system assumes benign RF environment.

Thus, GNSS availability depends on a relatively quiet RF spectrum.

**Spoofing: Manipulating Position Without Overpowering**

Spoofing is more subtle than jamming.

Instead of overwhelming the receiver, a spoofer transmits counterfeit GNSS-like signals designed to mislead the receiver into computing an incorrect position.

**Basic Spoofing Concept**

A spoofer:

1.  Generates GNSS-like signals with correct structure.

2.  Slightly increases signal power over authentic satellites.

3.  Gradually introduces timing offsets.

The receiver locks onto the stronger, counterfeit signals.

Because GNSS positioning depends on timing:

- Small time offsets → small position errors.

- Gradual changes → smooth trajectory deviation.

The receiver may not detect abrupt anomalies.

**Why Spoofing Is Structurally Possible**

Several architectural properties contribute:

1.  **Open civil signals** are publicly documented.

2.  **Predictable signal structure**, Spread-spectrum codes and navigation data formats are known.

3.  **No inherent transmitter authentication (in legacy signals)**, Civil signals traditionally lacked cryptographic authentication.

4.  **Receiver trust model** assume strongest consistent signals as authentic.

Because GNSS relies on passive reception, it cannot inherently distinguish between:

- A legitimate satellite at 20,000 km

- A nearby transmitter emulating that satellite

Unless additional verification mechanisms are used.

**Why Geometry Does Not Solve Spoofing**

Earlier sections emphasized geometry as a dominant factor in positioning accuracy.

However:

- Geometry amplifies measurement errors.

- Geometry does not detect falsified measurements.

If a spoofer controls multiple counterfeit signals coherently, it can create internally consistent pseudoranges.

The receiver may compute a geometrically valid but false solution.

Thus:

Good geometry improves precision. It does not guarantee authenticity.

**Why Power Does Not Solve Spoofing**

One might assume that increasing satellite transmit power would help.

However:

- Satellite power is constrained by space platform limits.

- Increasing power would not prevent nearby spoofers from overpowering signals locally.

- Spoofing depends on structure, not just amplitude.

The vulnerability arises from:

- Open signal design

- Passive reception model

Not merely from signal weakness.

**Mitigations (Brief Overview)**

Modern systems introduce mitigations such as:

- Signal authentication schemes (e.g., navigation message authentication)

- Multi-constellation cross-checking

- Inertial sensor integration

- Direction-of-arrival analysis

- Monitoring networks

These increase resilience.

However:

No passive satellite-based positioning system can be entirely immune to local RF manipulation.

**Key Insight**

GNSS fragility is not accidental.

It is a trade-off:

- Global accessibility

- Open standards

- Low-cost receivers

- Passive reception

These design choices enabled worldwide adoption. They also created structural exposure to RF interference and deception. Understanding GNSS requires recognizing both its precision and its vulnerability.
