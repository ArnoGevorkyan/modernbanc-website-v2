import * as S from './styles'
import * as I from '../icons'
import { SolutionCommentIcon } from '../icons'
import SolutionsCard from './solutions-card'
import { RefObject } from 'react'
import Link from 'next/link'
import { CashIcon } from '@heroicons/react/solid'

type TSoltuionsSectionProps = {
  id?: string
  inner_ref?: RefObject<HTMLDivElement>
}

const SolutionsSection = ({ id, inner_ref }: TSoltuionsSectionProps) => {
  return (
    <>
      <S.Container id={id} ref={inner_ref}>
        <S.TextContainer>
          <S.Title>Power anything with our modules</S.Title>
          <S.SubtitleContainer>
            <S.SubtitleIconContainer>
              <SolutionCommentIcon />
            </S.SubtitleIconContainer>
            <S.Subtitle>Use our modules to power any financial, accounting or payments activity within your company.</S.Subtitle>
          </S.SubtitleContainer>
        </S.TextContainer>

        <S.CardContainer>
          <SolutionsCard
            title="Accepting multiple payment methods"
            icons={[<CashIcon />, <I.WorkflowsIcon />, <I.EncryptionIcon />]}
            text="Accept multiple payment methods in a PCI-compliant way, build a smart custom checkout in minutes."
          />
          <SolutionsCard
            title="Marketplace money flows"
            icons={[<CashIcon />, <I.WorkflowsIcon />]}
            text="Orchestrate complex payments and accounting flows, bring down your operational work to zero."
          />
          <SolutionsCard
            title="Tracking sales and revenue"
            icons={[<CashIcon />]}
            text="Book and record your revenue, make forecasts and keep your business informed all-year round."
          />
          <SolutionsCard
            title="In-app currency and economy."
            icons={[<CashIcon />, <I.WorkflowsIcon />]}
            text="Build your own currency into your application and customize it to any level of precision."
          />
          <SolutionsCard
            title="Loans and credit"
            icons={[<CashIcon />, <I.WorkflowsIcon />]}
            text="Track your customer loans, offer world-class support with smart auto-calculated repayment plans."
          />
          <SolutionsCard
            title="Reconciliation"
            icons={[<CashIcon />]}
            text="Automate the busy work by letting Modernbanc categorize transactions and track them to their source."
          />
          <SolutionsCard
            title="Neobanking,  card-issuing"
            icons={[<CashIcon />, <I.WorkflowsIcon />, <I.EncryptionIcon />]}
            text="Replace your banking infrastructure built three decades ago with modern, universal accounting system."
          />
          <SolutionsCard
            title="Financial statements"
            icons={[<CashIcon />, <I.WorkflowsIcon />, <I.EncryptionIcon />]}
            text="Generate monthly financial reports and data exports for any use-case from simple bank statements to balance sheets."
          />
        </S.CardContainer>

        <Link href="mailto:hello@modernbanc.com">
          <S.SolutionContactUsButton>
            <S.SolutionContactUsButtonText>Couldn't find your use-case?</S.SolutionContactUsButtonText>
            <S.SolutionContactUsButtonText color="#9E9E9E">Contact us.</S.SolutionContactUsButtonText>
          </S.SolutionContactUsButton>
        </Link>
      </S.Container>
    </>
  )
}

export default SolutionsSection
