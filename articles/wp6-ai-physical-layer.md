**AI at the Physical Layer**

***Learning within the Limits of Physics***

**Executive Summary**

Across this series, we have seen that wireless systems are governed by a small set of physical constraints:

- Geometry constrains spatial inference

- Time precision constrains measurement accuracy

- Energy constrains signal detectability

- Time structuring shapes system behaviour

These are not design choices. They are physical limits.

Artificial intelligence (AI) is increasingly applied at the physical layer: channel estimation, equalization, detection, beamforming, and resource allocation.

This paper asks a simpler question:

**Where does AI genuinely help, and where does physics still hold the line?**

AI is a powerful tool. But it operates within the same physical limits as every other signal processing technique.

AI does not repeal physics.

It cannot:

- Increase received energy beyond the link budget

- Eliminate thermal noise

- Improve geometry without new measurements

- Exceed Shannon capacity

**Key insight:** AI is effective when signal and structure exist. It is ineffective when information is fundamentally absent.

**1. What "AI at the Physical Layer" Means**

The physical layer converts bits into electromagnetic signals and back. It includes:

- Modulation and demodulation

- Channel estimation and equalization

- Synchronization and detection

- Coding and decoding

- Beamforming and spatial processing

Traditional design is model-driven:

- Linear systems

- Probability and statistics

- Maximum likelihood detection

- Kalman filtering

AI introduces data-driven inference. The key distinction is not between old and new, but between model-driven and data-driven inference. Both operate under the same physical constraints.

**2. Why AI Entered the Physical Layer**

Modern wireless systems are increasingly complex:

- Massive MIMO

- Nonlinear hardware

- Dense spectrum sharing

- High mobility

Analytical models remain powerful but become:

- Difficult to scale

- Sensitive to assumptions

<!-- -->

- Hard to adapt dynamically

AI provides flexible approximation and adaptive learning.

It is most useful when:

- The signal exists

- Information is present

- The mapping is complex

**3. Where AI Helps**

AI provides value when:

- Information is present in the received signal.

- The environment exhibits structure that can be learned.

- The system requires adaptation beyond static models.

**3.1 Compensating for Hardware Nonlinearities**

Real RF hardware is imperfect:

- Power amplifiers distort at high output levels.

- I/Q imbalance skews constellations.

- Phase noise spreads carrier energy.

- ADC/DAC nonlinearities introduce spectral artifacts.

Classical compensation methods rely on explicit mathematical models. For example, engineers may model a power amplifier's distortion using polynomial equations and then design a correction filter based on that model.

Neural networks take a different approach. Instead of assuming a specific equation for the distortion, they learn the relationship directly from measured data. If the amplifier consistently distorts signals in a particular nonlinear way, a neural network can learn an approximate inverse mapping that reduces that distortion.

In this case, AI is not creating new information. The transmitted signal still exists in the received waveform, it is simply distorted in a predictable, though complex, manner. Because the distortion has structure, learning algorithms can model and compensate for it.

AI helps here because the signal is present and the distortion follows patterns. Learning captures those patterns without requiring a precise analytical model.

**3.2 Complex and Non-Stationary Channels**

Real channels deviate from ideal assumptions:

- Multipath in dense urban environments

- UAV-to-ground links with dynamic scattering

- Rapidly time-varying fading

- Non-Gaussian interference

AI-based equalizers and channel estimators can learn high-dimensional mappings between received samples and transmitted symbols.

Where model-based solutions become analytically cumbersome, learning can exploit empirical regularities.

The information is present in the received waveform. The challenge is not the absence of signal, but the complexity of the transformation required to recover it.

**3.3 Joint Optimization and Resource Allocation**

Modern systems require coordinated decisions across layers:

- Power control

- Beam scheduling

- Modulation adaptation

- Spectrum sharing

Reinforcement learning can discover adaptive policies that respond to traffic patterns and interference dynamics.

Physics defines the feasible region. AI optimizes within it. For example, reinforcement learning may discover better power-control policies, but it cannot increase total transmit power beyond regulatory limits.

**3.4 Interference and Anomaly Detection**

In crowded spectrum environments:

- Interference patterns vary.

- Jamming may be intentional.

- Signal types may be unknown.

AI classifiers can identify signal types, detect anomalies, and trigger adaptive countermeasures.

Learning does not increase SNR, but it can improve decision-making under uncertainty.

**3.5 GNSS and Multipath Mitigation**

White Paper 3 showed that GNSS positioning suffers from multipath, bias, and spoofing risk.

AI can assist in:

- Multipath pattern recognition

- Signal quality classification

- Spoofing detection

- Integrity monitoring

However, AI cannot improve satellite geometry or increase received signal power.

It refines inference where measurements already exist.

**4. Where AI Does Not Help**

AI cannot recover information that was never received.

**4.1 AI Cannot Increase Received Energy**

Received signal power depends on:

- Transmit EIRP

- Path loss

- Antenna gains

- Propagation environment

If the link budget does not provide sufficient ${\ E}_{b}/N_{0}$ , the information is physically buried in noise.

No neural network can reconstruct bits that were never distinguishable from randomness.

Energy scarcity remains fundamental.

**4.2 AI Cannot Remove Thermal Noise**

Thermal noise is governed by:

$$N_{0} = kT
$$

It is random and unavoidable.

Matched filtering is already optimal for maximizing SNR in additive white Gaussian noise.

AI cannot outperform fundamental detection limits in this regime.

**4.3 AI Cannot Fix Poor Geometry**

Positioning accuracy depends on geometric diversity.

If measurements lack spatial diversity, estimation uncertainty is inherently large.

AI may smooth solutions or regularize estimates.

It cannot create spatial constraints that do not exist.

**4.4 AI Cannot Exceed Shannon Capacity**

Channel capacity is bounded by:

$$C = B\ {\log}_{2}\ (1 + SNR)
$$

This is an information-theoretic limit.

AI may approach capacity more efficiently under practical constraints.

It cannot exceed it.

If bandwidth and SNR are fixed, capacity is fixed.

**4.5 AI Cannot Bypass Threshold Behaviour**

Wireless systems operating near sensitivity limits are effectively threshold driven. If a signal never exceeds the detection threshold, it cannot be decoded. Learning algorithms operate on received samples. If those samples contain insufficient information, learning provides no remedy.

**5. Risk and Robustness**

Model-based systems degrade predictably as SNR decreases.

AI systems may be vulnerable to:

- Distribution shift

- Adversarial interference

- Unseen propagation conditions

A model trained under nominal conditions may fail abruptly when assumptions break. For example, a neural receiver trained under urban multipath may behave unpredictably under heavy jamming. This is not a failure of learning itself, it is a reminder that data does not replace physics.

Robust AI systems must be grounded in physical insight.

**6. The Hybrid Future**

The most realistic path forward is not "AI replacing signal processing."

It is hybrid design:

- Physics-based core models

- Learning-based correction layers

- Hardware-aware adaptation

- Constraint-aware optimization

Physics defines limits.

AI provides:

- Flexibility

- Adaptation

- Complexity handling

Together, they produce robust systems.

**7. The Final Synthesis**

Across the series:

- Real systems demonstrate constraints

- Geometry defines what can be inferred

- Time defines how precisely

- Energy defines whether inference is possible

- Time structure defines how efficiently energy is used

- AI defines how intelligently systems operate within these limits

**Key insight:** Constraints are not obstacles. They are the structure within which good engineering happens.

The pattern is clear:

Wireless systems are constrained by space, time, energy, and information.

AI is powerful, but only inside that boundary.

Understanding the constraints is prerequisite to applying learning intelligently.

**Conclusion**

AI at the physical layer represents an evolution of signal processing, not a revolution against physics. It,

- Enhances adaptation

- Refines inference

- Manages complexity

But it does not alter:

- Link budgets

- Noise floors

- Geometric dilution

- Shannon limits

The future of RF systems belongs not to blind automation, but to constraint-aware intelligence.

Physics sets the limits of what is possible. Learning determines how efficiently we operate within those limits.
