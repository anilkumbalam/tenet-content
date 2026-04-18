
## Executive Summary

Modern communication systems often appear limited by hardware: antennas, amplifiers, coding schemes, or algorithms. Yet the ultimate limit is not technological but physical.

Claude Shannon showed that for any communication channel with bandwidth $(B)$ and signal-to-noise ratio (SNR), there exists a maximum achievable data rate:

$$C = B{\ log}_{2\ }(1 + \text{SNR})
$$

This expression defines the **capacity** of the channel.

More bandwidth helps. More power helps. Better coding helps. But none of these can exceed the fundamental boundary imposed by noise. Perhaps most counterintuitive of all, infinite bandwidth does not yield infinite data rate when energy is finite. Understanding this limit changes how engineers think about wireless systems. It shifts focus from "what can I build?" to "what does physics allow?"

## The Question

Suppose we want to increase data rate.

Common instincts:

- Increase bandwidth.

- Increase transmit power.

- Use better modulation.

- Use AI-based decoding.

Intuition suggests that with enough engineering effort, data rate can grow indefinitely. Shannon showed that this intuition is incomplete. There is a precise relationship between:

- Bandwidth

- Signal power

- Noise power

- Maximum reliable data rate

That relationship defines a boundary.

## The Shannon Capacity Formula

For a channel with:

- Bandwidth $B$ (in Hz)

- Signal-to-noise ratio SNR (linear, not in dB)

The maximum achievable data rate is:

> $$C = B{\log}_{2}\ (1 + \text{SNR}) $$ \
\
Where: \
\
$C\ $= capacity (bits per second) \
\
$B\ $= bandwidth \
\
SNR = signal power / noise power \
\
This is not a design equation. **This is a limit**.

**Example:**

If bandwidth = 1 MHz and SNR = 10,

C = 1e6 · log₂ (1 + 10) ≈ 3.46 Mbps

If SNR increases to 20,

C ≈ 4.39 Mbps

Doubling SNR does **not** double capacity. Doubling SNR increases capacity only marginally.

## What the Equation Really Says

The formula contains two key ideas:

1.  Capacity grows **linearly** with bandwidth **B** (for fixed SNR).

2.  As signal-to-noise ratio (SNR) increases, capacity grows only logarithmically.

The second point is especially important.

At high SNR,

$${\log}_{2\ }(1 + \text{SNR}) \approx {\log}_{2}\ (\text{SNR})
$$

This means that increasing signal power yields diminishing returns: large increases in SNR produce only incremental increases in capacity.

This imbalance between bandwidth and SNR fundamentally shapes how communication systems are engineered.

**Intuitive Analogy**

Imagine information flow like cars traveling on a highway.

- **Bandwidth** is the number of lanes.

- **Signal power (relative to noise)** is how strongly the cars' headlights stand out in fog.

If you double the number of lanes, you can roughly double the number of cars passing through per minute. More lanes directly increase throughput.

But increasing headlight brightness does not scale the same way. If visibility is already good, making headlights brighter yields only small improvements. Once you can clearly see the road, extra brightness adds little benefit.

Bandwidth expands capacity proportionally. Power improves clarity, but with diminishing returns.

In this analogy:

- Noise → fog

- SNR → visibility margin

- Capacity → throughput

- Diminishing return → log behaviour

### When SNR Is Large

When the signal-to-noise ratio is much greater than one (SNR ≫ 1), the Shannon expression simplifies:

$$C \approx B\ {\log}_{2}\ (\text{SNR})
$$

In this regime, capacity grows logarithmically with SNR.

This has an important consequence: increasing signal power produces diminishing returns.

Consider an example. Suppose SNR increases from 10 to 100, a tenfold increase in signal power relative to noise. The resulting increase in capacity is:

$${\log}_{2}\ (100) - {\log}_{2}\ (10) = {\log}_{2}\left( \frac{100}{10} \right) = {\log}_{2}\ (10)
$$

This is approximately 3.3 bits per second per Hz.

In other words, a 10× increase in SNR produces only a modest increase in capacity.

Even doubling SNR increases capacity by only 1 bit per second per Hz:

$${\log}_{2}\ (2 \cdot \text{SNR}) = {\log}_{2}\ (\text{SNR}) + 1
$$

Thus, power does not scale capacity proportionally. Each additional increase in SNR contributes less than the previous one. Once the signal is already strong relative to noise, further power increases offer only incremental benefit.

### When SNR Is Small

When the signal-to-noise ratio is much less than one (SNR ≪ 1), the Shannon expression simplifies differently:

$$C \approx \frac{B}{\ln 2} \cdot \text{SNR}
$$

In this regime, capacity increases approximately in direct proportion to SNR.

Here, the signal is only marginally stronger than the noise. Small increases in signal energy significantly improve reliability. Each additional unit of energy contributes meaningfully to detectability.

This is fundamentally an **energy-limited regime**. Because the system operates near the noise floor, energy efficiency becomes the dominant design concern. Every joule matters.

This regime characterizes systems such as:

- **Deep-space communication**, where transmit power is constrained by spacecraft limitations and enormous path loss

- **GNSS reception**, where signals arrive at Earth far below the thermal noise floor

- **Very low-power IoT devices**, which must operate for years on minimal battery capacity

In these systems, reliable communication is achieved not through high transmit power, but through careful management of energy per bit, often by reducing data rate, extending integration time, or employing efficient coding strategies. In this region, reducing data rate directly increases energy per bit.

So far, bandwidth has been held constant while signal-to-noise ratio varied. We now shift perspective and examine what happens when transmit power is fixed and bandwidth increases.

## Bandwidth Alone Is Not Enough

At first glance, Shannon's formula suggests that increasing bandwidth should directly increase capacity. Since capacity is proportional to $B$, doubling bandwidth appears to double the achievable data rate.

However, bandwidth also affects noise.

Noise power is given by:

$$N = N_{0}\ B
$$

where $N_{0}$ is the noise spectral density. This means that when bandwidth increases, total noise power increases proportionally.

If transmit power remains fixed, spreading that same power over a wider bandwidth reduces the signal-to-noise ratio. The signal is now competing against a larger amount of integrated noise.

As a result, simply expanding bandwidth does not guarantee proportional capacity increase.

Bandwidth increases spectral space to transmit, but it also increases integrated noise entering the receiver.

The net effect depends on how signal power and bandwidth are managed together.

This is why:

- **Ultra-wideband systems** require sufficient energy to maintain usable SNR.

- **GNSS signals**, though spread over wide bandwidths, rely on long integration to recover energy.

- **Wideband systems** are not automatically high-capacity systems.

Bandwidth is necessary for high data rates. But without adequate energy per bit, it is not sufficient.

### The Wideband Limit (Fixed Power Case)

So far, we noted that if transmit power is fixed, increasing bandwidth also increases noise power. This reduces the signal-to-noise ratio. We can now make that statement precise.

Assume total transmit power $P$is fixed.

Noise power over bandwidth $B$is:

$$N = N_{0}B
$$

where $N_{0}$is the noise spectral density.

The signal-to-noise ratio becomes:

$$\text{SNR} = \frac{P}{N_{0}B}
$$

This equation shows something important:

As bandwidth $B$increases, SNR decreases in direct proportion to $1/B$.

In other words, spreading the same power over more bandwidth makes each Hz weaker relative to noise.

**Substituting into Shannon's Formula**

Shannon's capacity expression is:

$$C = B{\log}_{2}\ (1 + \text{SNR})
$$

Substituting the expression for SNR:

$$C = B{\log}_{2}\left( 1+\frac{P}{N_{0}B} \right)
$$

At first glance, capacity still appears to grow with bandwidth because of the leading $B$. But the logarithmic term is shrinking at the same time.

To understand the true behaviour, consider what happens as bandwidth becomes very large.

**What Happens as** $\mathbf{B \rightarrow}\mathbf{\infty}$**?**

As $B$increases, the term

$$\frac{P}{N_{0}B}
$$

becomes very small.

For small $x$, we use the approximation:

$${\log}_{2}\ (1 + x) \approx \frac{x}{\ln 2}
$$

Applying this approximation:

$$C \approx B \cdot \frac{1}{\ln 2} \cdot \frac{P}{N_{0}B}
$$

Now something remarkable happens:

The bandwidth terms cancel.

$$C \rightarrow \frac{P}{N_{0}\ln 2}
$$

**The Key Result**

$$\underset{B \rightarrow \infty}{\lim}C = \frac{P}{N_{0}\ln 2}
$$

Capacity approaches a finite limit, even if bandwidth becomes infinitely large. Infinite spectrum does not create infinite information. Energy sets the ultimate boundary.

**What This Means Physically**

This result overturns a common intuition: more bandwidth does not guarantee more capacity.

With fixed transmit power, increasing bandwidth eventually pushes the system into an energy-limited regime. Beyond that point, additional bandwidth merely spreads the available power more thinly across noise, yielding diminishing returns.

In simple terms:

Infinite bandwidth cannot compensate for finite energy.

This is the wideband limit. It reveals that ultimate communication performance is governed not by bandwidth alone, but by available energy per bit relative to noise.

## Energy per Bit: The Deeper Limit

A more revealing quantity than SNR alone is the ratio:

$$\frac{E_{b}}{N_{0}}
$$

where:

- $E_{b}$= energy per bit

- $N_{0}$= noise spectral density (noise power per Hz)

This ratio measures how much energy is available to reliably convey a single bit of information relative to the background noise.

Unlike raw transmit power, $E_{b}$accounts for how long the system spends transmitting each bit. If the data rate is reduced while power remains fixed, more energy is accumulated per bit. In other words, reliability can be improved not only by increasing power, but by transmitting more slowly.

This shifts perspective from power-limited thinking to energy-limited thinking.

Shannon showed that reliable communication is possible only if $\frac{E_{b}}{N_{0}}$ exceeds a fundamental threshold. Below that threshold, no coding scheme, however sophisticated can achieve low error probability.

For an ideal channel, this minimum occurs at approximately:

$$\left( \frac{E_{b}}{N_{0}} \right)_{\text{min}} \geq - 1.59\text{ dB}
$$

This number represents a physical boundary, not a technological limitation. Below it, reliable communication is impossible.

In real hardware systems, non-linearities, quantization noise, phase noise, finite block lengths, synchronization errors, and other implementation losses prevent operation exactly at this boundary. Practical systems typically operate a few decibels above the theoretical limit to ensure robustness and manageable complexity.

Shannon's limit therefore serves not as an attainable point, but as a benchmark, a reference that defines how closely engineering can approach physical law.

Ultimately, what determines feasibility is not raw transmit power, but energy per bit relative to noise.

Energy, not just power, governs whether communication succeeds.

## Conclusion

Shannon's capacity formula answers a simple but profound question: How much information can be transmitted reliably over a noisy channel?

The answer depends on bandwidth and signal-to-noise ratio. Capacity increases linearly with bandwidth and only logarithmically with SNR. Increasing power yields diminishing returns. Expanding bandwidth increases opportunity but also noise.

Modern systems approach Shannon's boundary through sophisticated coding and spatial processing. Advanced error-correcting codes such as LDPC, Turbo, and Polar codes operate within a small fraction of a decibel of theoretical capacity under ideal conditions. Multi-antenna techniques such as MIMO and massive MIMO further increase capacity by exploiting spatial degrees of freedom and array gain, effectively creating parallel channels and improving usable SNR. Yet none of these techniques violate Shannon's law. They operate within it. The fundamental relationship between bandwidth, power, noise, and reliable information rate remains unchanged.

> Shannon did not merely provide an equation. He revealed a boundary. Beyond that boundary, no architecture or algorithm can prevail. Physics defines the outer edge of communication.
