
## Executive Summary

In the previous Paper, we examined why GNSS positioning is fragile, how geometry, clock bias, multipath and spoofing can destabilize location estimates.

However, GNSS fragility is not geometric or algorithmic. It is fundamentally a consequence of energy constraints, meaning that it is driven by energy limitations (rooted in energy scarcity at the receiver)

GNSS signals arrive at Earth below the thermal noise floor, can you imagine! They survive only because of careful energy management and processing gain.

This paper expands the perspective:

- Wireless systems are constrained by energy before they are constrained by algorithms.

- Communication reliability depends on energy per bit relative to noise.

- Fading and interference transform average power into statistical uncertainty.

- Link budgets are not mere tools; they are expressions of physical limits.

Understanding link budgets completes the triad introduced in previous papers:

- Geometry constrains space.

- Time constrains precision.

- Energy constrains detectability.

## From Geometry to Energy

Previously we discussed that GNSS must solve four unknowns simultaneously:

- $x,y,z$ (position)

- Receiver clock offset

We saw that poor geometry amplifies error. But geometry only operates if the receiver can reliably measure signals. That requires sufficient energy. Before solving geometry, the receiver must first detect and track the signal.

Energy precedes inference (receiver must first estimate the signal reliably before any position can be computed).

## The Simplified Link Equation and Its Limits

The classical link equation states:

$$P_{r} = P_{t} + G_{t} + G_{r} - L_{p}
$$

Where:

- $P_{r}$ = received power

- $P_{t}$ = transmit power

- $G_{t}$ = transmit antenna gain

- $G_{r}$ = receive antenna gain

- $L_{p}$ = path loss

This equation describes power transfer. It does not describe communication success. Communication depends on how that received power compares to noise.

## Communication Is Threshold-Driven

Digital communication performance depends on:

$$\frac{E_{b}}{N_{0}}
$$

Where:

- $E_{b}$*= energy per information bit* ^1^

- $N_{0}$*= noise power spectral density* ^1^

Unlike raw SNR, $E_{b}/N_{0}$ normalizes performance to bit rate. Each modulation and coding scheme requires a minimum $E_{b}/N_{0}$ to achieve an acceptable bit error rate.

If:

$$\frac{E_{b}}{N_{0}}\  < \ \text{Threshold}
$$Communication fails abruptly.

## The Noise Floor: The Constant Adversary

Thermal noise density at room temperature is approximately:

$$- 174\text{ dBm/Hz}
$$

Total noise power over bandwidth $B$becomes:

$$N = - 174 + 10\ {\log}_{10}\ \ (B) + NF
$$

Where:

- $NF$= receiver noise figure

Increasing bandwidth increases noise power. Higher data rates require more bandwidth.

Thus, Spectral efficiency and energy efficiency compete. Noise cannot be eliminated, only managed.

## GNSS as an Energy-Limited System

GNSS satellites transmit from approximately 20,000 km altitude. Free-space path loss exceeds 180 dB. Received signal power at Earth is roughly:

$$- 130\text{ dBm}
$$

This is below the thermal noise floor in typical receiver bandwidth.

GNSS works because:

- *Spread-spectrum processing gain redistributes energy*

- *Long integration improves effective* ${\ E}_{b}/N_{0}$, as it accumulates signal energy coherently while noise accumulates incoherently.

- *Correlation extracts structured signals from noise*

GNSS is not merely geometry limited. It is deliberately energy limited. Its fragility under jamming (Appendix C in WP3) is directly linked to this low received power. A small local interferer can overpower the signal.

**Spread-Spectrum and Processing Gain**

Spread-spectrum systems distribute signal energy across a bandwidth much wider than the data rate.

$$\text{Processing Gain} = \frac{B_{\text{spread}}}{R_{b}}$$

$B_{\text{spread}}$ is the bandwidth over which the signal is intentionally spread before transmission

In spread-spectrum systems:

- *The original data rate is relatively low.*

- *The signal is multiplied by a high-rate pseudo-random code.*

- *This expands the signal's bandwidth far beyond the data rate.*

*Example:*

*For GNSS (GPS L1 C/A)*

- *Data rate (*$R_{b})$* ≈ **50 bits/sec***

- *Spreading (chip) rate (*$B_{{spread}}) $* ≈ **1.023 MHz***

*The signal occupies roughly 1 MHz of bandwidth, even though the data rate is only 50 bps. That's enormous expansion.*

***Processing Gain Intuition***

$$\text{Processing Gain} = \frac{B_{\text{spread}}}{R_{b}}
$$

$$\frac{1,023,000}{50} \approx 20,460
$$

*In dB:*

$$10{\ log}_{10}\ (20460) \approx 43\text{ dB}
$$

*That's why GNSS works below the noise floor.*

$B_{\text{spread}}$ is NOT:

- RF carrier bandwidth

- Antenna bandwidth

- Receiver front-end bandwidth (necessarily)

It is the bandwidth after spreading, determined primarily by chip rate. This represents how much the signal is expanded before transmission and compressed during correlation at the receiver. Although the received power may lie below the thermal noise floor, correlation aligns the structured signal energy while noise remains uncorrelated.

This effectively improves usable $E_{b}/N_{0}$. Processing gain does not create energy. It redistributes energy across bandwidth and time. Spread-spectrum improves detectability without increasing transmit power.

## Noise-Limited vs Interference-Limited Segments

Wireless systems operate in two broad segments.

**Noise-Limited:**

- *GNSS*

- *Deep-space communication*

- *Satellite downlinks*

Performance is determined by receiver sensitivity.

**Interference-Limited:**

- *Cellular networks*

- *Wi-Fi*

- *Dense urban systems*

Performance is determined by competing transmitters. Increasing power in interference-limited systems increases interference for others. Energy management becomes network-level optimization.

## Fading: Why Average Power Is Misleading

Even if average received power is sufficient, instantaneous power fluctuates.

Multipath propagation creates:

- *Rayleigh fading (no dominant path)*

- *Rician fading (dominant line-of-sight plus reflections)*

- *Slow shadowing due to obstacles*

Deep fades of 20--30 dB are common.

This means:

Designing to average power guarantees periodic failure. Design must include margin.

## Fade Margin Is Statistical

Fade margin is defined as:

$$\text{Margin} = P_{r} - P_{\min}
$$

Where:

- $P_{\min}$ is the minimum power required for acceptable $E_{b}/N_{0}$.

Margin does not guarantee reliability.

It defines probability of success.

For example:

- *10 dB margin might correspond to 99% availability*

- *20 dB margin might correspond to 99.9% availability*

Wireless reliability is probabilistic.

## Why More Power Is Not the Universal Fix

When links degrade, the intuitive response is to increase transmit power.

However:

- *Regulatory EIRP limits constrain output*

- *Power amplifiers become nonlinear*

- *Battery life degrades*

- *Thermal limits arise*

- *Interference increases*

In interference-limited networks:

More power reduces overall system capacity.

In GNSS:

More satellite power would not prevent local spoofers.

Power is a blunt instrument.

Intelligent design uses:

- *Antenna gain*

- *Diversity*

- *Coding*

- *Processing gain*

- *Geometry optimization*

## The Deeper Connection to Earlier Concepts

Previous discussions showed that GNSS errors can become catastrophic when bias dominates. Even before bias, before geometry and before estimation of position, there must be sufficient signal energy.

If energy falls below the threshold:

- *Tracking loops lose lock*

- *Measurements collapse*

- *Geometry becomes irrelevant*

Energy is the primary constraint. Geometry and time operate only within it.

## The Three Limits That Define Wireless Systems

Across the series, we now see three coupled limits:

- *Geometry (constraint intersection)*

- *Time precision (clock accuracy)*

- *Energy (link budget &* $E_{b}/N_{0}$)

Wireless systems succeed only when all three are satisfied simultaneously. Failure in any one dimension collapses the solution.

## Conclusion

Link budgets are not spreadsheet exercises. They are statements of physical scarcity.

## Footer

## ^1^

**Derivation of** $\mathbf{E}_{\mathbf{b}}\mathbf{/}\mathbf{N}_{\mathbf{0}}$

Digital communication reliability depends on the ratio:

$$\frac{E_{b}}{N_{0}}
$$

This appendix shows how this quantity emerges directly from basic power and noise relationships.

**Energy per Bit (**$\mathbf{E}_{\mathbf{b}}$**)**

Let:

- $P_{r}$ = received signal power (Watts)

- $R_{b}$ = bit rate (bits per second)

Each bit occupies a time duration:

$$T_{b} = \frac{1}{R_{b}}
$$

Energy is power multiplied by time. Therefore, energy per bit is:

$$E_{b} = P_{r} \cdot T_{b}
$$

Substituting:

$$E_{b} = \frac{P_{r}}{R_{b}}
$$

Thus:

Energy per bit equals received power divided by bit rate. Increasing bit rate (while keeping power fixed) reduces energy per bit.

**Noise Spectral Density (**$\mathbf{\ }\mathbf{N}_{\mathbf{0}\mathbf{\ }}$**)**

Thermal noise power over bandwidth $B$ is given by:

$$N = kTB
$$

Where:

- $k$ = Boltzmann's constant

- $T$ = absolute temperature (Kelvin)

- $B$ = bandwidth

Noise power **per unit bandwidth** is:

$$N_{0} = kT
$$

At room temperature ( ≈ 290 K):

$$N_{0} \approx - 174\text{ dBm/Hz}$$

This represents the fundamental thermal noise floor.

**Forming the Ratio**

Combining the two results:

$$\frac{E_{b}}{N_{0}}\  = \ \frac{P_{r}\ /{\ R}_{b}}{kT}$$

This shows that communication reliability depends on:

- *Received signal power*

- *Bit rate*

- *Temperature (noise floor)*

Each modulation and coding scheme requires a minimum $E_{b}/N_{0}$ to achieve an acceptable bit error rate. Thus, a link budget ultimately determines whether the receiver can achieve the required energy per bit relative to noise.

$E_{b}/N_{0}$ is not an abstract communications parameter.

It is the usable signal energy available per information bit, relative to fundamental thermal noise.
